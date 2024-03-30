import SelectCourierTable from "./SelectCourierTable";
import Link from "next/link";
import React from 'react'
import SubNav from "../SubNav/page";
// import SubNav from "../SubNav/page";

function SelectCourierpage() {

    return (

     
        
        <>
<SubNav/>
            <div className=' text-center mt-2 p-2 justify-end  justify-self-center overflow-auto w-min-[3/12] sm:w-[11/12]  md:w-[9/12] md:-max-[90%] lg:max-w-[90vw] w-max-[90vw] w-max-[90%] snap-x  '>
                <div className='snap-center relative overflow-hidden pb-[98px] '>
                   
                    <SelectCourierTable />
                </div>
            </div>

        </>

    )
}




export default SelectCourierpage; 




