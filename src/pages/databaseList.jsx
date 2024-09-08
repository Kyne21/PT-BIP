import React from "react";
import Header from "../components/header";
import TableDb from "../components/tableDb"
import UploadExcel from "../components/uploadExcel";


function Database(){
  return (
    <>
    <Header/>
    <TableDb/>
    <UploadExcel/>
    </>
  )
};

export default Database;
