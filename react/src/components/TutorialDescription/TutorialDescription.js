import React from "react";
import { Link } from "react-router-dom";
import "./TutorialDescription.css";

function TutorialDescription(props) {
  const { title, description, published, id } = props.tutorial;
  const userType = localStorage.getItem("userType");
  return (
    <>
      <h2 className="">Tutorial</h2>
      <span className="fw-bold">Title: </span>
      <span>{title}</span>
      <br></br>
      <span className="fw-bold">Description: </span>
      <span>{description}</span>
      <br></br>
      <span className="fw-bold">Status: </span>
      <span>{published ? "Published" : "Pending"}</span>
      <br></br>
      {userType === "admin" && (
        <Link
          to={{
            pathname: `/update/${id}`,
            state: { tutorial: props.tutorial },
          }}
        >
          <button type="button" className="btn btn-warning btn-sm mt-2">
            Edit
          </button>
        </Link>
      )}
    </>
  );
}
export default TutorialDescription;
