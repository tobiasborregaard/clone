import React, { useState } from 'react';
import UploadBox from './Uploadbox.js';

function FileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showUploadBox, setShowUploadBox] = useState(false);
    const [hoverUploadArea, setHoverUploadArea] = useState(false); // New state for hover effect
    const categories = ["Category1", "Category2", "Category3"];

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files || event.dataTransfer.files);
        setUploadedFiles([...uploadedFiles, ...files]);
        setShowUploadBox(true);
    };

    const handleTechnicalUpload = (event) => {
        console.log(event.target.files[0]);
    };

    // Inline styles
    const uploadAreaStyle = {
        width: '80%',
        height: '50%',
        border: '2px dashed #ccc',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        backgroundColor: hoverUploadArea ? '#555' : 'transparent' // Conditional styling based on hover state
    };

    const uploadedItemsStyle = {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '20px'
    };

    const uploadedItemStyle = {
        width: '150px',
        height: '200px',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div className="fileupload">
            {!showUploadBox && (
                <div
                    style={uploadAreaStyle}
                    onDrop={(e) => {
                        e.preventDefault();
                        handleFileUpload(e);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onMouseEnter={() => setHoverUploadArea(true)} // Handle hover effect
                    onMouseLeave={() => setHoverUploadArea(false)} // Handle hover effect
                >
                    <span>Drag & Drop Files Here</span>
                    <input
                        type="file"
                        multiple
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                </div>
            )}
    
            <div style={uploadedItemsStyle}>
                {uploadedFiles.map((file, index) => (
                    <div key={index} style={uploadedItemStyle}>
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

export default FileUpload;
