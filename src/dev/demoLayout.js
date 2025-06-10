import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
// Layout
import AppHeader from "../Layout/AppHeader/";
import AppSidebar from "../Layout/AppSidebar/";
import AppFooter from "../Layout/AppFooter/";
// Theme Options
import ThemeOptions from "../Layout/ThemeOptions/";
export const DemoLayout = () => {
    return (_jsxs(_Fragment, { children: [_jsx(ThemeOptions, {}), _jsx(AppHeader, {}), _jsxs("div", { className: "app-main", children: [_jsx(AppSidebar, {}), _jsxs("div", { className: "app-main__outer", children: [_jsx("div", { className: "app-main__inner", children: _jsx(Outlet, {}) }), _jsx(AppFooter, {})] })] })] }));
};
