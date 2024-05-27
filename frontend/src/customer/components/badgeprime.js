import React from "react";
import { Image, Badge } from "react-bootstrap";

function BadgePrime({ isPrimeMember }) {
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
            {isPrimeMember
              ? "You are a Prime member..Explore and Enjoy your exclusive deals!!"
              : "You are not a Prime member...Get Prime Now!!"}
          </p>
          <Badge bg={isPrimeMember ? "success" : "danger"}>
            {isPrimeMember ? "Prime Member" : "Non-Prime Member"}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default BadgePrime;
