import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
    {
        id: 1,
        name: "start",
        path: "/",
        exact: "true"
    },
    {
        id: 2,
        name: "produkty",
        path: "/products"
    },
    {
        id: 3,
        name: "kontakt",
        path: "/contact"
    },
    {
        id: 4,
        name: "panel admina",
        path: "/admin"
    },
];

const Navigation = () => {
    return ( 
        <nav className="mainNav">
            <ul>
                {list.map(link => (
                    <li key={link.id}>
                        <NavLink to={link.path} 
                                 exact={link.exact ? link.exact : "false"}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Navigation;