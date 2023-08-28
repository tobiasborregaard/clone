import React, { useState } from 'react';
import UploadBox from './Uploadbox.js';
import UploadedFilesGrid from './UploadedFilesGrid.js';

function FileUpload() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showUploadBox, setShowUploadBox] = useState(false);
    const [hoverUploadArea, setHoverUploadArea] = useState(false); // New state for hover effect
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files || event.dataTransfer.files);
        setUploadedFiles([...uploadedFiles, ...files]);
        setShowUploadBox(true);
    };
    const handleClose = () => {
        setShowUploadBox(false);
    };

    const handleFileClick = (file) => {
        setSelectedFile(file);
        setShowUploadBox(true);
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
        
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        backgroundColor: hoverUploadArea ? '#555' : 'transparent'
    };

    const containerStyle = {
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',   // <-- This will stack children vertically
        justifyContent: 'center',
        alignItems: 'center'       // <-- This will center the children horizontally
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
            
            {showUploadBox && uploadedFiles.length > 0 && (
                    <UploadBox pdfFile={uploadedFiles[uploadedFiles.length - 1]} onClose={handleClose} />
                )}
            <div>
                
            <UploadedFilesGrid files={uploadedFiles} onFileClick={handleFileClick} />
            {showUploadBox && (
                <UploadBox pdfFile={selectedFile} onClose={handleClose} />
            )}
            </div>
        </div>
    );
}

export default FileUpload;
