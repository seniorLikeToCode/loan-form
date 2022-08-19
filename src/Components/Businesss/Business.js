import React, { useEffect } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const BusinessDetails = ({ setIcon }) => {
  const handlerIcon = () => {
    setIcon((curr) => curr + 1);
  };
  //   useEffect(() => {}, []);

  return (
    <>
      <h1 className="mb-3">Business Details</h1>
      <div className="w-1/2">
        <div className="w-full mb-3">
          <MDBInput
            className="input-field"
            label="Business Name"
            name="BusinessName"
            id="typeBusinessName"
            type="text"
          />
        </div>
        <div className="flex gap-4 mb-3">
          <div className="w-full">
            <MDBInput
              className="input-field "
              label="Company Fax"
              name="companyFax"
              id="typeCompanyFax"
              type="text"
            />
          </div>
          <div className="w-full">
            <MDBInput
              className="input-field"
              label="Company Phone"
              name="companyPhone"
              id="typeCompanyPhone"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="w-full">
            <MDBInput
              className="input-field"
              label="Company Email"
              name="companyEmail"
              id="typeCompanyEmail"
              type="email"
            />
          </div>
          <div className="w-full">
            <MDBInput
              className="input-field"
              label="Postal Code"
              name="postalCode"
              id="typePostalCode"
              type="number"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <MDBInput
            className="input-field"
            label="Address"
            name="address"
            id="typeaddress"
            type="text"
          />
        </div>
      </div>
      <Link to="/loan" className="continueButton" onClick={handlerIcon}>
        Continue
      </Link>
    </>
  );
};

export default BusinessDetails;
