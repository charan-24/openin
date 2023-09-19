import React, { useState} from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";
import { Info } from "./userData";
function Barchart(){
    // const url="https://datausa.io/api/data?drilldowns=Year&measures=Population";
    // const [info,setInfo] = useState([]);
    // useEffect(()=>{
    //     axios.get(url)
    //     .then(response=>response.text())
    //     .then((response)=>{
    //         //alert("hi");
    //         setInfo(response.data);
    //         console.log(response.data);
    //     })
    //     .catch((err)=>console.log(err))
    // },[]);
    const [userData,setUserData]= useState({
        labels: Info.map((item) => item.Year),
        datasets: [
            {
                label:"Population",
                data : Info.map((item)=> item.Population),
                backgroundColor:["#98D89E"],
                borderRadius:2
            },
            {
                label:"Deaths",
                data : Info.map((item)=> item.Deaths),
                backgroundColor:["#EE8484"],
                borderRadius:2
            }]
    });

    const option = {
        plugins: {
            legend:{
                display:false
            }
        },
        // layout: {
        //     padding: 0
        // }

    };

    return(
        <div className="shadow-2xl mx-auto sm:w-3/4 md:p-4 md:w-3/4 bg-[#FFF] border-[#E0E0E0]-500 border-2 rounded-3xl">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-[1.5rem] md:text-[1.9rem]">Activites</h1>
                    <p className="text-xs md:text-sm text-slate-400">2013-2020</p>
                </div>
                <div className="flex mt-5 gap-5 md:mt-10 md:gap-10">
                    <div className="flex gap-2">
                        <div className="h-[10px] w-[10px] bg-[#98D89E] rounded-full mt-2"></div>
                        <p className="text-sm">Population</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-[10px] w-[10px] bg-[#EE8484] rounded-full mt-2"></div>
                        <p className="text-sm">Deaths</p>
                    </div>
                </div>
            </div>
            <Bar data={userData} options={option} className="mt-2"/>
        </div>
    );
}

export default Barchart;
