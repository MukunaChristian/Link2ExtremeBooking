import { Outlet } from "react-router";

import BottomNav from "./bottomBar";
export default function WebLayout() {
    return (
        <>
        <BottomNav/>
        <Outlet />
        </>
    );
}