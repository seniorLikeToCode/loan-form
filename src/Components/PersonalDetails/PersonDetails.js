import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

const PersonalDetails = () => {
  return (
    <>
      <h1 className="mb-3">Personal Details</h1>
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
    </>
  );
};

export default PersonalDetails;
