import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

export default function Home() {
    return(
        <>
        <Navbar/>
        <p className='about-container'>Hello Home</p>
        <Footer/>
        </>
    )
}