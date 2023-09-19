import React from "react";
import {FiPieChart} from 'react-icons/fi';
import {BsTags,BsCalendarDay} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {IoSettingsOutline} from 'react-icons/io5';
import {GrClose} from 'react-icons/gr';

function Sidebar({showSideBar,sideBar}){
    // if(!showSideBar){
    //     return null;
    // }
    return(
            <div className="">               
                <div>
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="pt-4 text-3xl md:text-4xl font-montserrat font-bold">Board.</h1>
                        {<GrClose onClick={sideBar} className="cross" style={{color:"white",float:"right",marginRight:"10px",marginTop:"8px"}}/>}
                    </div>
                    
                    <ul className=" leading-[60px] md:leading-[80px] mt-4 md:mt-10 text-[1.125rem]">
                    <li className="font-montserrat font-bold">{<FiPieChart style={{ display: "inline" }} className="mr-2"/>}Dashboard</li>
                        <li className="font-montserrat font-normal">{<BsTags style={{ display: "inline" }} className="mr-2"/>}Transactions</li>
                        <li className="font-montserrat font-normal">{<BsCalendarDay style={{ display: "inline" }} className="mr-2"/>}Schedules</li>
                        <li className="font-montserrat font-normal">{<CgProfile style={{ display: "inline" }} className="mr-2"/>}Users</li>
                        <li className="font-montserrat font-normal">{<IoSettingsOutline style={{ display: "inline" }} className="mr-2"/>}Settings</li>
                    </ul>
                </div>
                <div className="absolute bottom-[2.5rem]">
                    <p className="mb-6 font-montserrat font-normal">Help</p>
                    <p className="font-montserrat font-normal">Contact Us</p>
                </div>
            </div>
    );
}

export default Sidebar;