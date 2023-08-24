// Dashboard.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UploadSite from './Uploadsite.js';
import ProductList from './ProductList.js';
import TopNav from './TopNav.js'

function Dashboard() {
    return (
        <TopNav/>
            <Routes>
                <Route path="/dashboard" element={<UploadSite />} />
                <Route path="/dashboard/products" element={<ProductList />} />
            </Routes>
    );
}

export default Dashboard;
