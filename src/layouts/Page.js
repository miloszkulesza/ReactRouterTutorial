import React, { Component } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';

class Page extends Component {
    state = {
        permissions: false
    }

    handleLogin = (username, password) => {
        if(username === "admin" && password === "admin") {
            this.setState({
                permissions: true
            });
            this.props.navigate('/admin');
            return true;
        }
        else {
            this.setState({
                permissions: false
            });
            this.props.navigate('/login');
            return false;
        }
    }

    handleLogout = () => {
        this.setState({
            permissions: false
        });
        this.props.navigate('/');
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin" element={<AdminPage    handleLogin={this.handleLogin} 
                                                            permissions={this.state.permissions}
                                                            handleLogout={this.handleLogout} />} />
                <Route path="/login" element={<LoginPage handleLogin={this.handleLogin} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        );
    }    
}

function PageWithNavigate(props) {
    let navigate = useNavigate();
    return <Page {...props} navigate={navigate} />;
}

export default PageWithNavigate;