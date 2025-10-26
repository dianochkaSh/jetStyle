import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
interface MainLayoutInterface {
    children: any
}

const MainLayout:React.FC<MainLayoutInterface> = ({ children}) => {
  return (
    <div className="app-body">
      <Navbar/>
        {children}
      <Footer/>
    </div>

  )
}
export default MainLayout;
