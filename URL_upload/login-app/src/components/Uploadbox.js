import React, { useState } from 'react';

function UploadBox({ pdfFile, onClose }) {
    const [additionalPdfs, setAdditionalPdfs] = useState([]);
    const [categories, setCategories] = useState([
        { id: 1, name: "Category1", checked: false },
        { id: 2, name: "Category2", checked: false },
    ]);

    const handleCategoryChange = (id) => {
        setCategories(prev => 
            prev.map(cat => cat.id === id ? {...cat, checked: !cat.checked} : cat)
        );
    };

    const handleAdditionalPDFs = (event) => {
        const files = Array.from(event.target.files);
        setAdditionalPdfs(prev => [...prev, ...files]);
    };

    const handleClickOutside = (event) => {
        if (event.target.id === "modalBackground") {
            onClose();
        }
    };

    // Inline Styles
    const backgroundStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    };

    const modalStyle = {
        width: '60%',
        padding: '20px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px'
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '20px'
    };

    return (
        <div style={backgroundStyle} onClick={handleClickOutside} id="modalBackground">
            <div style={modalStyle}>
                <h2>{pdfFile.name}</h2>

                <div style={contentStyle}>
                    {/* Category Selection */}
                    <div>
                        {categories.map(category => (
                            <label key={category.id}>
                                <input 
                                    type="checkbox" 
                                    checked={category.checked} 
                                    onChange={() => handleCategoryChange(category.id)}
                                />
                                {category.name}
                            </label>
                        ))}
                    </div>

                    {/* Additional PDF Upload and List */}
                    <div>
                        <input type="file" multiple onChange={handleAdditionalPDFs} />
                        {additionalPdfs.map((file, index) => (
                            <p key={index}>{file.name}</p>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button>Submit</button>
            </div>
        </div>
    );
}

export default UploadBox;
