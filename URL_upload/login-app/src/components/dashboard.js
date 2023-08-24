import React, { useState } from 'react';
import UploadBox from './Uploadbox.js';  // Adjust the path as needed
import './dashboard.css'; // Import your CSS file
import TopNav from './TopNav.js'; // Import the TopNav component

function Dashboard() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showUploadBox, setShowUploadBox] = useState(false);
    const categories = ["Category1", "Category2", "Category3"];  // Example categories

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files || event.dataTransfer.files);
        setUploadedFiles([...uploadedFiles, ...files]);
        setShowUploadBox(true);  // Show the UploadBox when a file is uploaded
    };
    
    

    const handleTechnicalUpload = (event) => {
        // Handle the technical PDF upload here
        // For now, we'll just console log the uploaded technical file
        console.log(event.target.files[0]);
    };

    return (
        <div className="dashboard">
            <TopNav /> 
    
            {/* Conditionally render the upload area based on the showUploadBox state */}
            {!showUploadBox && (
                <div
                    className="upload-area"
                    onDrop={(e) => {
                        e.preventDefault();
                        handleFileUpload(e);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <span className="upload-text">Drag & Drop Files Here</span>
                    <input
                        type="file"
                        multiple
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                </div>
            )}
    
            <div className="uploaded-items">
                {uploadedFiles.map((file, index) => (
                    <div key={index} className="uploaded-item">
                        {file.name}
                    </div>
                ))}
            </div>
    
            {showUploadBox && (
                <UploadBox
                    pdfFile={uploadedFiles[uploadedFiles.length - 1]}
                    categories={categories}
                    onTechnicalUpload={handleTechnicalUpload}
                />
            )}
        </div>
    );
}    
export default Dashboard;


