// UploadSite.js
import React, { useState } from 'react';
import UploadBox from './Uploadbox.js';
import './Uploadsite.css';


function UploadSite() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showUploadBox, setShowUploadBox] = useState(false);
    const categories = ["Category1", "Category2", "Category3"];

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files || event.dataTransfer.files);
        setUploadedFiles([...uploadedFiles, ...files]);
        setShowUploadBox(true);
    };

    const handleTechnicalUpload = (event) => {
        console.log(event.target.files[0]);
    };

    return (
        <div className="upload-site">
            
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

export default UploadSite;
