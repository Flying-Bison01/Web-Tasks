const ListView = ({ pdfs, onSelectPdf }) => {
  return (
    <div className="list-view">
      {pdfs.map((pdf, index) => (
        <div className="pdf-item" key={index} onClick={() => onSelectPdf(pdf)}>
          <img
            src={`https://via.placeholder.com/150?text=${encodeURIComponent(pdf.name)}`}
            alt={`${pdf.name} cover`}
            className="pdf-thumbnail"
          />
          <div className="pdf-details">
            <h3>{pdf.name}</h3>
            <p>Author: {pdf.author || 'Unknown'}</p>
            <p>Published: {pdf.published || 'N/A'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ReaderView Component
const ReaderView = ({ pdf, onBack }) => {
  return (
    <div className="reader-view">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <iframe
        src={pdf.link}
        title={pdf.name}
        className="pdf-reader"
        frameBorder="0"
      ></iframe>
    </div>
  );
};


export default ListView;
