import { Link, NavLink } from "react-router-dom";

export default function TopBar() {
    return (
        <nav className="sticky flex items-center justify-between m-0 w-full">
            <div className="x-background-sidebar secondaryBackground w-full h-20 pl-48">
                <div className="h-20 w-fit grid place-content-center mx-5">
                    <Link to="/app/home">
                        <h1 className="sixthColor text-6xl m-0">SAIO</h1>
                    </Link>
                </div>
            </div>
            <div className="oppositeShadeColor grid grid-flow-col justify-end h-fit w-fit">
                <NavLink
                    to={"/"}
                    className={({isActive}) => {
                        return (isActive? "x-active-navtab primaryBackground":"x-inactive-navtab secondaryBackground");
                    }}
                >
                    <div className="h-20 w-32 grid place-content-center">
                        <h2>About</h2>
                    </div>
                </NavLink>
                <NavLink
                    to={"/login"}
                    className={({isActive}) => {
                        // return (isActive? "x-active-navtab primaryBackground oppositeShadeColor":"x-inactive-navtab secondaryBackground");
                        return (isActive? "x-active-navtab primaryBackground":"x-inactive-navtab secondaryBackground");
                    }}
                >
                    <div className="h-20 w-32 grid place-content-center">
                        <h2>Login</h2>
                    </div>
                </NavLink>
                <NavLink
                    to={"/signup"}
                    className={({isActive}) => {
                        return (isActive? "x-active-navtab primaryBackground":"x-inactive-navtab secondaryBackground");
                    }}
                >
                     <div className="h-20 w-32 grid place-content-center">
                        <h2>Signup</h2>
                    </div>
                </NavLink>
            </div>
            <div className="x-background-sidebar secondaryBackground h-20 pr-48">
            </div>
        </nav>
    )
}