import React, { useState, useRef, useEffect } from 'react';
import './Uploadbox.css';  // Import the CSS
import pdfjs from 'pdfjs-dist';

function UploadBox({ pdfFile, categories, onTechnicalUpload, onSave }) {
    const [buttonState, setButtonState] = useState('unsaved');
    const [isTechDragOver, setIsTechDragOver] = useState(false);  // Renamed to isTechDragOver
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const pdfPreviewRef = useRef(null);
    const handleSaveClick = async () => {
        if (buttonState === 'unsaved') {
            await onSave();  // Assuming onSave is a promise
            setButtonState('saved');
            setTimeout(() => setButtonState('edit'), 500);
        }
    };

    useEffect(() => {
        if (pdfFile) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                const pdf = await pdfjs.getDocument(event.target.result).promise;
                const page = await pdf.getPage(1);
                const canvas = pdfPreviewRef.current;
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1 });
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                page.render({ canvasContext: context, viewport: viewport });
            };
            reader.readAsArrayBuffer(pdfFile);
        }
    }, [pdfFile]);

    const handleFileUpload = (event) => {
        const files = event.target.files;
        // Process the uploaded files here
        setUploadedFiles([...uploadedFiles, ...files]);
    };

    const renderButtonContent = () => {
        switch (buttonState) {
            case 'unsaved':
                return 'Save';
            case 'saved':
                return '✔️';  // Checkmark
            case 'edit':
                return 'Edit';
            default:
                return 'Save';
        }
    };

    return (
        <div className="uploadbox">
            <div className="section-container">
                <h3 className="section-header">PDF Preview</h3>
                <div className="pdf-preview">
                    <canvas ref={pdfPreviewRef}></canvas>
                    <div>{pdfFile?.name}</div>
                </div>
            </div>
    
            <div className="section-container">
                <h3 className="section-header">Categories</h3>
                <div className="categories">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`cat-${index}`} />
                            <label htmlFor={`cat-${index}`}>{category}</label>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="section-container">
                <h3 className="section-header">Technical Information</h3>
                <div 
                    className={`technical-upload ${isTechDragOver ? 'dragover' : ''}`}
                    onDragEnter={() => setIsTechDragOver(true)}
                    onDragLeave={() => setIsTechDragOver(false)}
                    onDrop={() => setIsTechDragOver(false)}
                >
                    <input type="file" accept=".pdf" onChange={handleFileUpload} />
                    {uploadedFiles.length === 0 && <span className="upload-text">Upload Technical Information</span>}
                    {uploadedFiles.length > 0 && uploadedFiles.map((file, index) => (
                        <div key={index}>{file.name}</div>
                    ))}
                </div>
            </div>
    
            <div className="section-container">
                <h3 className="section-header">Actions</h3>
                <div className="save-section">
                    <button onClick={handleSaveClick}>
                        {renderButtonContent()}
                    </button>
                </div>
            </div>
        </div>
    );
}  // <-- This closing brace was misplaced

export default UploadBox;
