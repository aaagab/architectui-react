import { Outlet } from "react-router-dom";

// Layout

import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import AppFooter from "../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../Layout/ThemeOptions/";

export const DemoLayout = () => {
    return (
        <>
            <ThemeOptions />
            <AppHeader />
            <div className="app-main">
                <AppSidebar />
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <Outlet />
                    </div>
                    <AppFooter />
                </div>
            </div>
        </>
    );
};