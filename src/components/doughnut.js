import React from 'react';
import {
    Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

// ChartJS.defaults.global.legend.display = false;
// ChartJS.defaults.global.elements.line.tension = 0;

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );



const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        "#98D89E","#F6DC7D","#EE8484"
      ],
      borderWidth: 0,
      borderRadius: 2,
      borderAlign:"center",
    },
  ], 
};

const option = {
  // layout: {
  //       padding: 20
  //   },
  plugins: {
    legend: {
           display: false //This will do the task
    }
  },
  radius:100,
  cutout:'80%',
};

function Doughchart() {
  return(
  <div className='w-3/4 mx-auto lg:w-2/5 rounded-3xl shadow-2xl border-[#E0E0E0]-500 border-2 p-2'>
    <div className='flex flex-row justify-between'>
      <h1 className='font-bold text-[1.2rem] lg:text-[1.58rem] xl:text-4xl xl:pl-2'>Top Products</h1>
      <p className='text-xs md:text-sm mt-4 mr-6'>2013-2021</p>
    </div>
    <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row'>
      <div className='md:ml-5 lg:ml-0'>
        <Doughnut data={data} options={option}/>
      </div> 
      <div className='md:text-[20px] mx-4 sm:mt-8 sm:mx-16 md:mx-16 md:mt-8 lg:mt-0 xl:mt-12 xl:mx-4 lg:mb-2'>
        <ul className='list-disc flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-col justify-around lg:gap-10 xl:gap-4'>
          <li className='text-[#98D89E] '>
            <div className='text-black'>
              <p className='font-bold'>Green</p>
              <p className='text-sm'>9</p>
            </div>
          </li>
          <li className='text-[#EE8484]'>
            <div className='text-black'>
              <p className='font-bold'>Red</p>
              <p className='text-sm '>3</p>
            </div>
          </li>
          <li className='text-[#F6DC7D]'>
            <div className='text-black'>
              <p className='font-bold'>Yellow</p>
              <p className='text-sm'>12</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
  );
}

export default Doughchart;
