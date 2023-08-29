import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './Uploader/FileUpload.js'; 
import FileData from './FileData.js'; 
import TopNav from './Topnav and footer/TopNav.js';
import Footer from '../Topnav and footer/Footer';

function Dashboard() {
    // Define the inline styles
    const dashboardStyle = {
        display: 'flex',
        flexDirection: 'column',  // Stack children vertically
        minHeight: '50vh',  // Minimum height to take up full viewport height
        backgroundColor: '#3C3C3C',
        maxHeight: '84vh',
        color: '#3C3C3C',
        width: '100vw',
        justifyContent: 'center',
        textAlign: 'center',
        overflowX: 'hidden',
    };

    return (
        <div>

        <Router>
            <TopNav />
            <div className="dashboard" style={{ ...dashboardStyle, flexGrow: 1 }}>
                <Routes>
                    <Route exact path="/" element={<FileUpload />} />
                    <Route path="/mydata" element={<FileData />} />  
                </Routes>
                
            </div>
        </Router>
        <Footer/>
        </div>
    );
}

export default Dashboard;

