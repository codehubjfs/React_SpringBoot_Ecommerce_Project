import React, { useEffect } from "react";
import { Image, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomerData } from "../slices/CustomerSlice";
let badgeColor;
let membershipStatus;


function BadgePrime() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.customer);

  useEffect(() => {
    dispatch(fetchCustomerData()); 
  }, [dispatch]);
  if (customer && customer.membership === "Basic") {
    badgeColor = "danger";
    membershipStatus = "Non-Prime Member";
  } else {
    badgeColor = "success";
    membershipStatus = "Prime Member";
  }

  return (
    <div className="container-fluid">
      <div
        className="d-flex align-items-center"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Image
          src="https://iphb.goa.gov.in/wp-content/uploads/2017/08/blank.jpg"
          roundedCircle
          style={{ width: "50px", height: "50px" }}
          alt="Avatar"
        />

        <div className="ms-2">
          <p>
            {customer && customer.membership === "Basic"
              ? " "+" "+"You are not a Prime member...Get Prime Now!!"
              : " "+" "+"Explore and Enjoy your exclusive deals!!"}
          </p>




        </div>

      </div>
      <Badge bg={badgeColor}>{membershipStatus}</Badge>

    </div>
  );
}

export default BadgePrime;