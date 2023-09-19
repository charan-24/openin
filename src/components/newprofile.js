import React from "react";
import {BsWhatsapp} from "react-icons/bs";
import {CiMail} from "react-icons/ci";
import {AiOutlineInstagram,AiOutlineYoutube} from "react-icons/ai";

function Newprofile({isVisible,data,profile}){

    if(!isVisible){
        return null;
    }
    if(data.name==="" && data.email==="" && data.phone==="" &&data.insta==="" && data.youtube===""){
        profile();
    }
    
    const str= "............";
    return(
        // <div className="lg">
            <div className="w-3/4 lg:w-fit xl:w-2/5 lg:h-fit lg:p-4 lg:box-content xl:box-border lg:py-[9rem] xl:pt-[1rem] lg:mt-0 mx-auto mt-8 rounded-3xl shadow-2xl border-[#E0E0E0]-500 border-2 pt-4">
                <h1 className="text-xl pl-2 sm:pl-14 md:pl-18 lg:pl-0 xl:pl-[4rem] md:text-3xl font-bold xl:text-4xl">{data.name}</h1>
                {/* <div className="flex flex-col justify-center items-center"> */}
                    <div className="flex flex-col pl-2 md:pl-0 md:ml-0 sm:ml-12 sm:mt-2 md:flex-row md:justify-between xl:justify-around flex-wrap text-lg xl:mt-[4rem] xl:text-xl">
                        <div className="mt-4  sm:mt-1 md:flex md:flex-col md:gap-4">
                            <p className="">{<BsWhatsapp style={{ display: "inline"}}/>} {data.phone}</p>
                            <p className="mt-1">{<CiMail style={{ display: "inline" }}/>} {data.email}</p>
                        </div>   
                        <div className="mt-1 md:flex md:flex-col md:gap-4">
                            <p>{<AiOutlineInstagram style={{ display: "inline" }}/>} {data.insta}</p>
                            <p className="mt-1 mb-4">{<AiOutlineYoutube style={{ display: "inline" }}/>} {data.youtube}</p>
                        </div>
                    </div>                          
                {/* </div>   */}
            </div>     
        // {/* </div> */}
    );
}

export default Newprofile;