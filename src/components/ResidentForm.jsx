import React from "react";
import "./styles/ResidentForm.css";

const ResidentForm = ({ handleSubmit }) => {
  return (
    <form className="header" onSubmit={handleSubmit}>
      <div className="search">
        <input id="idLocation" type="text" placeholder="Type a location id" />
        <button>Search</button>
      </div>
    </form>
  );
};

export default ResidentForm;
