import {  Outlet,  } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function AddCompany() {

  return (
    <>
      <TopBar title={""} />
      <Outlet />
    </>
  );
}
