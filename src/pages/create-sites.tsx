import {  Outlet,  } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function CreateSites() {

  return (
    <>
      <TopBar title={"Create Site"}  />
      <Outlet />
    </>
  );
}
