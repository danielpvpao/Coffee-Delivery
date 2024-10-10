import { Outlet } from "react-router-dom";
import { Header } from "../pages/Home/Header";

export function DefaultLayout(){
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}