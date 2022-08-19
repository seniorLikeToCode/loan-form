import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import companyLogoWebp from "./logo.webp";
import companyLogoSvg from "./logo.svg";
import Timeline from "./Components/TimeLine/Timeline";
import PersonalDetails from "./Components/PersonalDetails/PersonDetails";
import LoanDetails from "./Components/Loan/Loan";
import BusinessDetails from "./Components/Businesss/Business";

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
          <Timeline icon={icon} />
        </div>

        {/* component */}
        <div className="form-container-right">
          <img
            src={companyLogoWebp}
            alt="dygnify"
            className="h-12 mb-3 stroke-2 fill-white stroke-white"
          ></img>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PersonalDetails setIcon={setIcon} />} />
              <Route
                path="/business"
                element={<BusinessDetails setIcon={setIcon} />}
              />
              <Route path="/loan" element={<LoanDetails setIcon={setIcon} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
