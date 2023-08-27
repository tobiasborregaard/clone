import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './FileUpload.js'; 
import FileData from './FileData.js'; 
import TopNav from './TopNav.js';
import Footer from './Footer';

function Dashboard() {
    // Define the inline styles
    const dashboardStyle = {
        backgroundColor: '#3C3C3C',
        color: '#3C3C3C',
        height: 'fit-content',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    };

    return (
        <div>

        <Router>
            <TopNav />
            <div className="dashboard" style={dashboardStyle}>
                <Routes>
                    <Route exact path="/" element={<FileUpload />} />
                    <Route path="/mydata" element={<FileData />} />  
                </Routes>
                {/* Rest of your Dashboard content, if any */}
            </div>
        </Router>
        <Footer/>
        </div>
    );
}

export default Dashboard;

