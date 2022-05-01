import React from 'react';
import '../styles/Header.css';
import { Routes, Route } from 'react-router-dom'
import HeaderImage from '../components/HeaderImage';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';


const Header = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HeaderImage image={header1} />} />
            <Route path="/products" element={<HeaderImage image={header1} />} />
            <Route path="/contact" element={<HeaderImage image={header2} />} />
            <Route path="/admin" element={<HeaderImage image={header3} />} />
            <Route path="*" element={<HeaderImage image={header1} />} />
        </Routes>
    );
}
 
export default Header;