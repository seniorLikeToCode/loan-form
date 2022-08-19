import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const LoanDetails = ({ setIcon }) => {
  const handlerIcon = () => {
    setIcon((curr) => curr + 1);
  };
  return (
    <>
      <h1 className="mb-3">Loan Details</h1>
      <div className="w-1/2">
        <div className="flex gap-4 mb-3">
          <div className="w-full">
            <MDBInput
              className="input-field "
              label="First Name"
              name="firtname"
              id="typefirstname"
              type="text"
            />{" "}
          </div>
          <div className="w-full">
            <MDBInput
              className="input-field"
              label="Last Name"
              name="lastname"
              id="typelastname"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="w-full">
            <MDBInput
              className="input-field"
              label="email"
              name="email"
              id="typeEmail"
              type="email"
            />{" "}
          </div>
          <div className="w-full">
            <MDBInput
              className="input-field"
              label="Phone number"
              name="phoneNumber"
              id="typePhone"
              type="tel"
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
      <Link to="/complete" className="continueButton" onClick={handlerIcon}>
        Continue
      </Link>
    </>
  );
};

export default LoanDetails;
