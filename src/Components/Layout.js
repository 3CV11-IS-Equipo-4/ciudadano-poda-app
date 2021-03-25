import React from 'react';
import './Layout.css'
// import Navbar from './Navbar';

function Layout({head, subheading,children}){
    return(
        <div class="container-fluid layout">
        {/*Navbar*/}
        <h1>{head}</h1>
        <h2>{subheading}</h2>
        <div class="container d-flex justify-content-center align-items-center flex-column">
            {children}            
        </div>

        </div>
    );
}

export default Layout;