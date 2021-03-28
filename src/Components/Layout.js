import React from 'react';
import './Layout.css'
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({head, subheading,children,type}){
    return(
        <div className="container-fluid text-center layout d-flex flex-column">
        <Navbar type={type}/>
        <h1 className="m-5">{head}</h1>
        {subheading ? <h2 className="m-5">{subheading}</h2>:''}
        <div className="container d-flex flex-fill justify-content-start align-items-center flex-column">
            {children}            
        </div>
        <Footer/>
        </div>
    );
}

export default Layout;