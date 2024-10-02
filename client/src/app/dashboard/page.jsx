import BarchartMain from "@/components/dashboardcomp/Barchartmain";
import { Header } from "@/components/dashboardcomp/Header";
import { LastRecords } from "@/components/dashboardcomp/Lastrecords";
import { Totalexpense } from "@/components/dashboardcomp/Totalexpense";
import React from "react";

const page = () => {
  return (
    <div className="margin">
      <Header />
      <Totalexpense />
      {/* <BarchartMains /> */}
      <LastRecords />
    </div>
  );
};

export default page;
