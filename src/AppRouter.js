import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Main from './pages/main';
import Clipper from './pages/clipper';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element=<Main/> />
            <Route path="/clipper" element=<Clipper/> />
        </Routes>

    )
}

export default AppRouter