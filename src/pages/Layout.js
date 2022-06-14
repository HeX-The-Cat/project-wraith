import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import BottomInfo from './components/BottomInfo';

const Layout = () => {
  return (
    
    <div className=' bg-gray-500 flex justify-center h-screen'>
        <div className='pageWidth' >
            <Banner />

            <NavBar />

            <Outlet />

            <BottomInfo />
        </div>
    </div>
  );
};

export default Layout;