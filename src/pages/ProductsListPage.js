import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductsListPage.css';

const products = ["car", "bike", "motorcycle"]

const ProductsListPage = () => {
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ));
    return ( 
        <div className="products">
            <h2>
                Lista produktów
            </h2>
            <ul>
                {list}
            </ul>
        </div>
     );
}
 
export default ProductsListPage;