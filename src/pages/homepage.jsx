import React from "react";
import Header from "../header";
import CustomizedTables from "../components/table";
import "./homepage.css";


function Homepage() {
  return (
    <div>
      <Header />
      <div className="table-container">
        <div className="table">
          <CustomizedTables />
        </div>
      </div>

    </div>
  );
}

export default Homepage;
