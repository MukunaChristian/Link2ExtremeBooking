import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function AddActivities() {

  return (
    <>
      <TopBar title={"Add Activities"} />
      <Outlet />
    </>
  );
}
