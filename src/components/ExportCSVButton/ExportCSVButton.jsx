import React from 'react';

const ExportCSVButton = () => {
  const downloadCSV = () => {
    // Sending request to backend API to fetch the CSV file
    fetch('http://localhost:5000/api/export-csv')  // Ensure this matches your backend route
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to download CSV');
        }
        return response.blob();  // Convert response to blob (binary large object)
      })
      .then(blob => {
        // Create a URL for the blob and download the file
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'submissions.csv'); // Specify the CSV file name
        document.body.appendChild(link);
        link.click(); // Programmatically click the link to start download
        link.parentNode.removeChild(link); // Clean up by removing the link
      })
      .catch(error => {
        console.error('Error downloading the CSV file:', error);
      });
  };

  return (
    <button onClick={downloadCSV}>
      Export CSV
    </button>
  );
};

export default ExportCSVButton;
