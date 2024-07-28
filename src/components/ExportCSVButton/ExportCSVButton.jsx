import React from 'react';

const ExportCSVButton = () => {
  const handleExportCSV = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/export-csv', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'submissions.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Failed to download CSV');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleExportCSV} style={buttonStyle}>Export CSV</button>
  );
};

const buttonStyle = {
  backgroundColor: '#4CAF50', // Green background
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '12px',
  transition: 'background-color 0.3s ease',
};

export default ExportCSVButton;
