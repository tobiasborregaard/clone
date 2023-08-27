import React, { useState } from 'react';
import UploadBox from './Uploadbox.js';

function FileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showUploadBox, setShowUploadBox] = useState(false);
    const [hoverUploadArea, setHoverUploadArea] = useState(false); // New state for hover effect

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files || event.dataTransfer.files);
        setUploadedFiles([...uploadedFiles, ...files]);
        setShowUploadBox(true);
    };
    const handleClose = () => {
        setShowUploadBox(false);
    };
    // Inline styles
    const uploadAreaStyle = {
        width: '50%',
        height: '20%',
        border: '2px dashed #ccc',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        backgroundColor: hoverUploadArea ? '#555' : 'transparent'
    };

    const containerStyle = {
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            {!showUploadBox && (
                <div
                    style={uploadAreaStyle}
                    onDrop={(e) => {
                        e.preventDefault();
                        handleFileUpload(e);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onMouseEnter={() => setHoverUploadArea(true)}
                    onMouseLeave={() => setHoverUploadArea(false)}
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
            
            {showUploadBox && (
                <UploadBox pdfFile={uploadedFiles[uploadedFiles.length - 1]} />
            )}
        </div>
    );
}

export default FileUpload;
