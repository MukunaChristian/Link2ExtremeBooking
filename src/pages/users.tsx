import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import TopBar from "~/layouts/topnavBar";


export default function User() {

  return (
    <>
      <TopBar title={"Operator Users"} admin={"Super Admin"} email={"BobVanFake@gmail.com"} />
      <Outlet />
    </>
  );
}
