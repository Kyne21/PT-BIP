import React from "react";
import Header from "../components/header";
import HeaderSurat from "../components/surat/header";
import SuratJalan from "../components/surat/suratJalan";
import Table from "../components/table10";

function Homepage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <HeaderSurat />
      <SuratJalan/>
    </>
  );
}

export default Homepage;
