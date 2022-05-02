import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = () => {
    let params = useParams();

    return ( 
        <>
            <div>Strona produktu</div>
            <Product id={params.id} />
            <Link to="/products">Wstecz</Link>
        </>        
    );
}
 
export default ProductPage;