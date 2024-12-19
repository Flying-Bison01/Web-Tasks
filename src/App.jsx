// Import necessary libraries
import React, { useState, useEffect } from 'react';
import './App.css'; // Create a CSS file for styling
import ListView from './components/ListView';
import ReaderView from './components/ReaderView';
// API endpoint
const API_URL = 'https://api.npoint.io/dee51ea017d20efdfcc8';

// Main App Component
const App = () => {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch PDFs from API
    const fetchPdfs = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPdfs(data); // Use the raw data from the API
      } catch (error) {
        console.error('Error fetching PDFs:', error);
      }
    };
    fetchPdfs();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter PDFs based on the search term
  const filteredPdfs = pdfs.filter(pdf =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>PDF Browser</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search PDFs"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </header>

      <main>
        {selectedPdf ? (
          <ReaderView pdf={selectedPdf} onBack={() => setSelectedPdf(null)} />
        ) : (
          <ListView pdfs={filteredPdfs} onSelectPdf={setSelectedPdf} />
        )}
      </main>
    </div>
  );
};

export default App;
