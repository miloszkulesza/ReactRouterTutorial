import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    let location = useLocation();
    const locations = location.pathname.split('/');
    if(locations[1] === "")
        locations.splice(1, 1);
    const locationsList = locations.map(location => {
        switch(location)
        {
            case "":
                return "Start";

            case "contact":
                return ">Kontakt";

            case "products":
            case "product":
                return ">Produkty";

            case "admin":
                return ">Panel admina";

            case "login":
                return ">Logowanie";
            
            default:
                return ">" + location;
        }
    });
    return ( 
        <>
            <div>
                Footer
            </div> 
            <p>{locationsList}</p>
        </>
    );
}
 
export default Footer;