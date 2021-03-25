import React from 'react';
import './Layout.css'
import Navbar from './Navbar';

function Layout({head, subheading,children,footer}){
    return(
        <div className="container-fluid text-center layout">
            {Navbar}
            <h1>{head}</h1>
            <h2>{subheading}</h2>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                {children}            
            </div>
            
        </div>
    );
}

export default Layout;