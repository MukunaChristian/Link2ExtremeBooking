import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function Setting() {

  return (
    <>
      <TopBar title={"Settings"} />
      <Outlet />
    </>
  );
}
