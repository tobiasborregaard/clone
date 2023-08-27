import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './FileUpload.js'; // Import the new component
import FileData from './FileData.js'; 
import './dashboard.css';
import TopNav from './TopNav.js';

function Dashboard() {
    return (
        <Router>
                <TopNav />
            <div className="dashboard">

                <Routes>
                    <Route exact path="/" element ={ <FileUpload />}/>
                    <Route path="/mydata" element ={ <FileData />}/>  

                </Routes>

                {/* Rest of your Dashboard content, if any */}
            </div>
        </Router>
    );
}

export default Dashboard;
