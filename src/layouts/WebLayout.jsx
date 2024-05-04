import { Outlet } from "react-router";
import BottomNav from "./bottomBar";
import TopBar from "./topnavBar";

export default function WebLayout() {
    return (
        <>
        <TopBar/>
        <BottomNav/>
        <Outlet />
        </>
    );
}