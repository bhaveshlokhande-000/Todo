import React from "react";
import "./Tutorial.css";

function Tutorial(props) {
  const { tutorial, setSelectedTutorial, setSelectedRowRef, selectedRowRef } =
    props;

  const clearBackground = () => {
    if (selectedRowRef) selectedRowRef.classList.remove("active");
  };

  return (
    <li
      key={tutorial.id}
      className="list-group-item p-3 li"
      onClick={(e) => {
        setSelectedTutorial(tutorial);
        clearBackground();
        setSelectedRowRef(e.target);
        e.target.classList.add("active");
      }}
    >
      {tutorial.title}
    </li>
  );
}

export default Tutorial;
