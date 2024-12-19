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

export default ReaderView;
