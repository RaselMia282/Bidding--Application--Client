import React from 'react';
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer'
const RootLayout = () => {
    return (
        <div className='flex min-h-screen flex-col'>
            <Navbar></Navbar>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
