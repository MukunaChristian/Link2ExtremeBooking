import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function AddUsersOperator() {

  return (
    <>
      <TopBar title={"Add Operator User "} />
      <Outlet />
    </>
  );
}
