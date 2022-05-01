import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
 
export default Page;