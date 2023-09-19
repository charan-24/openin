import {BsBell,BsCashCoin,BsTags} from 'react-icons/bs';
import {AiOutlineLike} from 'react-icons/ai';
import {LuUsers2} from 'react-icons/lu';
function Financedata(){
    const financeData=[
        {
            id:1,
            name:"Total Revenues",
            revenue:"$2,19,430",
            percentage:"+2.5%",
            icon:<BsCashCoin  className='text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] md:mt-4'/>
        },
        {
            id:2,
            name:"Total Transactions",
            revenue:"1,520",
            percentage:"+1.7%",
            icon:<BsTags className='text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] md:mt-4'/>
        },
        {
            id:3,
            name:"Total Likes",
            revenue:"9,721",
            percentage:"+1.4%",
            icon:<AiOutlineLike className='text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] md:mt-4'/>
        },
        {
            id:4,
            name:"Total Users",
            revenue:"9,721",
            percentage:"+4.2%",
            icon:<LuUsers2 className='text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem]  md:mt-4'/>
        },
    ];
    const financeDataItems=financeData.map(item=>                          
        <div key={item.id} className="w-1/3 md:w-1/5 mb-2 mr-2 rounded-lg md:rounded-3xl shadow-xl h-fit bg-white md:px-4">                            
            <button className='rounded-full'>{item.icon}</button>
            <p className='text-[0.7rem] mt-1'>{item.name}</p>
            <p className='text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold float-left'>{item.revenue}</p>
            <p className='text-[0.6rem] md:mb-8 md:mt-1 lg:text-[0.7rem] float-right bg-green-200 rounded-3xl'>{item.percentage}</p>                                                          
        </div>
    ) 
    return(
        <>
            {financeDataItems}
        </>
        
    );           
}

export default Financedata;