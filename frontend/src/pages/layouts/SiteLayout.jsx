import TopBar from "../../components/TopBar";
import { Outlet } from "react-router-dom";

export default function SiteLayout() {
    return (
        <>
            <TopBar/>
            <Outlet/>
        </>
    )
}