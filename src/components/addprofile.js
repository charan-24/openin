import React, { useState } from "react";
// import {BsPlusCircle} from "react-icons/bs"
import {IoIosAdd} from "react-icons/io";
function Addprofile({isVisible,click}){
    if(isVisible){
        return null
    }
    return(
            <div className="w-3/4 lg:w-2/5 mx-auto mt-8 lg:mt-0 rounded-3xl shadow-2xl text-[#00000038] border-[#E0E0E0]-500 border-2 lg:flex lg:flex-col lg:justify-center lg:items-center">
                <div onClick={()=>click()}>
                    <IoIosAdd  className="text-[100px] mt-[3rem] md:text-[150px] font-normal text-[#999CA0] bg-[#F2F2F2] rounded-full mx-auto md:mt-[5.5rem] lg:mt-4"/>
                    <h1 className="text-center mb-[3rem] md:text-[20px] md:mt-2">Add Profile</h1>    
                </div>                 
            </div>
    );
}

export default Addprofile;