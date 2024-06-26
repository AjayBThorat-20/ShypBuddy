import React from "react";
import SubNav from "../SubNav/page";
import ShippingDetailsNav from "./ShippingDetailsNav";
import Form from "./Form";
import DisplayAddress from "./DisplayAddress";
// import Formbar from "./Formbar";
function MainForm() {
  return (

    <>
      <div>
        <SubNav />
        <div className="mt-4 mb-[98px] ">

          <div className="flex flex-col md:flex-row w-full h-full justify-between ">
            <div className="w-full md:max-w-[3/4] md:mr-2 lg:mr-2 ">
              <div className=" bg-white  rounded-md">
              <div className="pt-2 ">

                <ShippingDetailsNav />
              </div>
              <Form />
              </div>
            </div>
            <div className="max-w-[1/4] lg:w-1/4 md:w-fullrounded-md  bg-white boredr border-solid" >
              <DisplayAddress />
            </div>
          </div></div>
      </div>
    </>
  );
}

export default MainForm;