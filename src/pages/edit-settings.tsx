import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function Editsetting() {

  return (
    <>
      <TopBar title={"Settings"} />
      <Outlet />
    </>
  );
}
