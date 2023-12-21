import { Outlet } from "react-router-dom";
import setSiteColorTheme from "../../scripts/setColorTheme";

export default function SiteLayout() {
    setSiteColorTheme(null);
    return (
        <Outlet/>
    )
}