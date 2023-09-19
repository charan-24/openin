import React, { useState } from "react";

function Modal({isVisible,click,setArr,profile}){
    const [showBasic,setShowBasic] = useState(true);
    const [data,setData] = useState({name:"",email:"",phone:"",insta:"",youtube:""});
    if(!isVisible)
        return null;
    const handleShow = (e)=>{
        e.preventDefault();
        if(e.target.id==="basic" && !showBasic){
            setShowBasic(true);
        }
        else if(e.target.id==="social" && showBasic){
            setShowBasic(false);
        }
        else if(e.target.id==="next"){
            setShowBasic(false);
        }
        else if(e.target.id==="back"){
            setShowBasic(true);
        }
    }
    const handleClick = (e)=>{
        if(e.target.id==="wrapper"){
            click();
        }
        else{
            return;
        }
    }

    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log("hi");
        setArr(data);
        // alert(data);
        // console.log(data);
        profile();
        click();
    }
    return(
        <div className="fixed inset-0 backdrop-brightness-50 flex justify-center items-center" id="wrapper" onClick={handleClick}>
            <div className="w-[34rem] bg-white h-fit rounded-xl box-content">
                    <div className="flex flex-row justify-between p-4">
                        <h1 className="font-bold text-2xl">Add New Profile</h1>
                        <button className="text-2xl" onClick={()=>click()}>X</button>
                    </div>
                    <hr></hr>
                    <div className="flex justify-evenly mt-2">
                        <button id="basic" onClick={handleShow} className="font-bold text-lg">Basic</button>
                        <button id="social" onClick={handleShow} className="font-bold text-lg">Social</button>
                    </div>
                    <div>
                        <form id="submit" method="post" className="p-4">
                            <div className={showBasic?"relative":"hidden"}>
                                <label htmlFor="name" className="block text-[16px] m-2 font-semibold">Enter Name*</label>                    
                                <input id="name" name="name" type="text" onChange={handleChange} value={data.name}placeholder="Eg. John Doe" className="h-[43px] bg-white rounded w-full border-[#F2F2F2] border-2 p-2 focus:outline-none"/>

                                <label htmlFor="email" className="block text-[16px] m-2 font-semibold">Enter Email*</label>                    
                                <input id="email" name="email" type="email" onChange={handleChange} value={data.email}placeholder="Eg. John@xyz.com" className="h-[43px] bg-white rounded w-full border-[#F2F2F2] border-2 p-2 focus:outline-none"/>

                                <label htmlFor="phone" className="block text-[16px] m-2 font-semibold">Enter Phone*</label>                    
                                <input id="phone" name="phone" type="text" onChange={handleChange} value={data.phone}placeholder="Eg. 9123456780" className="h-[43px] bg-white rounded w-full border-[#F2F2F2] border-2 p-2 mb-8 focus:outline-none"/>
                                <hr></hr>
                                <div className="flex flex-row flex-wrap justify-end">
                                    <button id="next" onClick={handleShow} className="bg-blue-500 px-4 py-2 text-white rounded-lg mt-2 font-semibold">next</button>
                                </div>
                                </div>
                                
                            <div className={showBasic?"hidden":""}>
                                <label htmlFor="insta" className="block text-[16px] m-2 font-semibold">Instagram Link (Optional)</label>                    
                                <input id="insta" name="insta" type="text" onChange={handleChange} value={data.insta}placeholder="Eg. ..instagram.com/username" className="h-[43px] bg-white rounded w-full border-[#F2F2F2] border-2 p-2 focus:outline-none"/>

                                <label htmlFor="youtube" className="block text-[16px] m-2 font-semibold">Youtube Link (Optional)</label>                    
                                <input id="youtube" name="youtube" type="text" onChange={handleChange} value={data.youtube}placeholder="Eg. ..youtebe/username" className="h-[43px] bg-white rounded w-full border-[#F2F2F2] border-2 p-2 mb-8focus:outline-none "/>
                                <hr></hr>
                                <div className="flex flex-row flex-wrap justify-end gap-2">
                                    <button id="back" onClick={handleShow} className="bg-blue-500 px-4 py-2 text-white rounded-lg mt-2 font-semibold">back</button>
                                    <button id="done" type="submit" onClick={handleSubmit} className="bg-blue-500 px-4 py-2 text-white rounded-lg mt-2 font-semibold">Done</button>
                                </div>
                            </div>
                            {/* <p>{data.name},{data.email},{data.phone},{data.insta},{data.youtube}</p>  */}
                        </form>
                        {/* <form className={showBasic?"hidden":""}>
                            <label htmlFor="insta" className="block text-[16px] m-2">Instagram Link (Optional)</label>                    
                            <input id="insta" type="text" value={data.name}placeholder="Eg. ..instagram.com/username" className="h-[43px] bg-[#F5F5F5] rounded w-full"/>
                            <label htmlFor="youtube" className="block text-[16px] m-2">Youtube Link (Optional)</label>                    
                            <input id="youtube" type="text" value={data.name}placeholder="Eg. ..youtebe/username" className="h-[43px] bg-[#F5F5F5] rounded w-full"/>
                            <button id="back" onClick={handleShow}>back</button>
                        </form> */}
                        
                    </div>
            </div>
        </div>
    );
}

export default Modal;