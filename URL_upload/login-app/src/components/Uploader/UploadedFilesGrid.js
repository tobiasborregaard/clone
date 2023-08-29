function UploadedFilesGrid({ files, onFileClick }) {
    const gridStyle = {
        border: '2% white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // This is a slightly lighter transparent white color

        margin: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        maxHeight: '1000px',
        overflowY: 'auto',
        padding: '20px',
        color: 'white',
        width: '100%',
        height: '100%',
        justifyItems: 'center', // Center grid items horizontally
        alignItems: 'start',    // Align grid items to the top vertically
        
        boxSizing: 'border-box',

    };
    

    const itemStyle = {
        border: '2px dashed white',
        padding: '10px',
        width: 'calc((200% - 3 * 20px) / 4)', // Adjust for 3 gaps of 20px (for 4 columns)
        height: '150%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        wordBreak: 'break-all',  // <-- This will break up the underscores
        textAlign: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    };
    

    return (
        <div style={gridStyle}>
            {files.map((file, index) => (
                <div key={index} style={itemStyle} onClick={() => onFileClick(file)}>
                    {file.name}
                </div>
            ))}
        </div>
    );
}

export default UploadedFilesGrid;