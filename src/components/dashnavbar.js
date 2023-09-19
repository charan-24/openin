import React from "react";
import {CiSearch} from 'react-icons/ci';
import {BsBell} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';
import './dashboard.css';
function Dashnavbar({sideBar}){
    return(       
        <div className="flex justify-between relative">
            <h1 className="dashboard text-[1.2rem] lg:text-[1.9rem] absolute left-1 font-bold font-montserrat"> <button className="font-poppins" >{<RxHamburgerMenu style={{fontSize:"20px",marginRight:"2px"}} className="lg:hidden" onClick={sideBar}/>}</button>  Dashboard</h1>
            <div className="md:text-[20px] absolute right-0 top-1/4">
                <div className="flex relative gap-4 md:text-[1.3rem]">
                    <label htmlFor="search" className="relative block">                   
                        <input type="text" name="search" id="search" placeholder="search" className="form-input w-[100px] lg:w-[16rem] lg:p-2 rounded-[5px] focus:outline-none"/>
                        <CiSearch className="pointer-events-none absolute right-1 top-1/4" />
                    </label>
                    <button className=""><BsBell /></button>
                    <button className="mr-2"><CgProfile /></button>
                </div>                           
            </div>
        </div>
    );
}

export default Dashnavbar;