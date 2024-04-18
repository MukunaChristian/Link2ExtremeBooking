import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function ActivitySites() {

  return (
    <>
      <TopBar title={"Activities Summary"} />
      <Outlet />
    </>
  );
}
