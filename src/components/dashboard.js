import React, { Fragment,useState } from "react";
import Dashnavbar from "./dashnavbar";
import Financedata from "./stats";
import Barchart from "./Barchart";
import Doughchart from "./doughnut";
import Addprofile from "./addprofile";
import Sidebar from "./sidebar";
import Modal from "./modal";
import Newprofile from "./newprofile";
import {RxHamburgerMenu} from 'react-icons/rx';
function Dashboard() {  
    const [showModal,setShowModal]= useState(false);
    const [showProfile,setShowProfile] = useState(false);
    const [arr,setArr] = useState([]);
    const [showSideBar,setShowSideBar] = useState(false);
    const [closeX,setCloseX] = useState(false);
    const handleModal = ()=>{
        //e.preventDefault();
        setShowModal(!showModal);
    } 
    const handleProfile = ()=>{
        setShowProfile(!showProfile);
    }
    const handleSideBar = ()=>{
        setShowSideBar(!showSideBar);
        setCloseX(!closeX);
    }
    return(
        <Fragment>
            <div className="lg:grid lg:grid-cols-12 max-sm:pd-2 md:p-8 bg-[#F8FAFF] relative pl-1">
                <div className={showSideBar?"absolute z-10 lg:col-span-2 h-full w-5/6 sm:w-1/2 bg-blue-600 pl-2 rounded-xl lg:pl-6 lg:pt-6 lg:hidden text-white ":"max-lg:hidden lg:col-span-2 h-full w-full bg-blue-600 rounded-3xl lg:pl-6 lg:pt-6  text-white relative"}>
                    <Sidebar showSideBar={showSideBar} sideBar={handleSideBar} close={closeX}/>
                </div>
                <div className="lg:col-span-10">
                    <div className="mt-3">
                        <Dashnavbar sideBar={handleSideBar}/>
                    </div>                   
                    <div className="flex flex-wrap flex-row justify-around mt-14 md:gap-2 md:mt-20">                
                        <Financedata />
                    </div>
                    <div className="mt-6">
                        <Barchart />
                    </div>
                    <div className="flex flex-wrap flex-col lg:flex-row lg:justify-around mt-16 mb-6">
                        <Doughchart />
                        <Addprofile isVisible={showProfile} click={handleModal} />
                        <Newprofile isVisible={showProfile} data={arr} profile={handleProfile}/>
                    </div>

                </div>
            </div>
            <Modal isVisible={showModal} click={handleModal} setArr={setArr} profile={handleProfile}/>
            </Fragment>
    );
}

export default Dashboard;