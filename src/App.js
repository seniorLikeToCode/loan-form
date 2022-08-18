import React, { useState } from "react";
import "./App.css";
import companyLogoWebp from "./logo.webp";
import companyLogoSvg from "./logo.svg";
import Timeline from "./Components/TimeLine/Timeline";
import PersonalDetails from "./Components/PersonalDetails/PersonDetails";

function App() {
  const [icon, setIcon] = useState(1);
  return (
    <>
      <div className="form-container">
        <div className="form-container-left">
          <img
            src={companyLogoSvg}
            alt="dygnify"
            className="h-12 m-auto mt-4 "
          ></img>
          <Timeline icon={icon} setIcon={setIcon} />
        </div>

        {/* component */}
        <div className="form-container-right">
          <img
            src={companyLogoWebp}
            alt="dygnify"
            className="h-12 mb-3 stroke-2 fill-white stroke-white"
          ></img>
          <PersonalDetails />
          <button className="continueButton">Continue</button>
        </div>
      </div>
    </>
  );
}

export default App;
