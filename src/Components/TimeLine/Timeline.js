import React, { useState } from "react";
import { TiTick, TiMediaRecord } from "react-icons/ti";
import { IconContext } from "react-icons";

const TimeLine = () => {
  const [icon, setIcon] = useState(1);
  return (
    <>
      <div className="grid grid-flow-row justify-center content-center grid-cols-2 gap-3 ">
        <div className="ml-16 mb-44 mt-32">
          <IconContext.Provider value={{ color: "#9e75e7", size: "32" }}>
            <div>
              {icon === 1 && (
                <TiMediaRecord className="bg-white rounded-full" />
              )}
              {icon !== 1 && <TiTick className="bg-white rounded-full" />}
              <div className="mt-2 mb-2 w-0.5 ml-3.5 bg-white h-12"></div>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "#9e75e7", size: "32" }}>
            <div>
              {icon === 1 && (
                <TiMediaRecord className="rounded-full border-2" />
              )}
              {icon === 2 && (
                <TiMediaRecord className="bg-white rounded-full" />
              )}
              {icon >= 3 && <TiTick className="bg-white rounded-full" />}
              <div className="mt-2 mb-2 w-0.5 ml-3.5 bg-white h-12"></div>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "#9e75e7", size: "32" }}>
            <div>
              {icon < 3 && <TiMediaRecord className="rounded-full border-2" />}
              {icon === 3 && (
                <TiMediaRecord className="bg-white rounded-full" />
              )}
              {icon >= 4 && <TiTick className="bg-white rounded-full" />}
              <div className="mt-2 mb-2 w-0.5 ml-3.5 bg-white h-12"></div>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#9e75e7", size: "32" }}>
            {icon < 4 && <TiMediaRecord className="rounded-full border-2" />}
            {icon === 4 && <TiMediaRecord className="bg-white rounded-full" />}
            {icon === 5 && <TiTick className="bg-white rounded-full" />}
          </IconContext.Provider>
        </div>
        <div>
          <div className="mt-32">
            <p className="text-purple-100 mt-1 mb-0">Person details</p>
            <p className="text-purple-50/[.6] text-sm w-10/12">
              Lorem Ipsum es simplemente el texto de 
            </p>
          </div>
          <div className="mt-7">
            <p className="text-purple-100 mt-1 mb-0">Business details</p>
            <p className="text-purple-50/[.6] text-sm w-10/12">
              Lorem Ipsum es simplemente el texto de 
            </p>
          </div>
          <div className="mt-8">
            <p className="text-purple-100 mt-1 mb-0">Loan details</p>
            <p className="text-purple-50/[.6] text-sm w-10/12">
              Lorem Ipsum es simplemente el texto de 
            </p>
          </div>
          <div className="mt-8">
            <p className="text-purple-100 mt-1 mb-0">Completed</p>
            <p className="text-purple-50/[.6] text-sm w-10/12">
              Lorem Ipsum es simplemente el texto de 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
