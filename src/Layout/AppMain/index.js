import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Navigate, Routes } from "react-router-dom";
import { DemoLayout } from "../../dev/demoLayout";
import { ToastContainer } from "react-toastify";
import { useDashboardsRoutes } from "../../DemoPages/Dashboards";
import { ElementsRoutes } from "../../DemoPages/Elements";
import { ComponentsRoutes } from "../../DemoPages/Components";
import { TablesRoutes } from "../../DemoPages/Tables";
import { FormsRoutes } from "../../DemoPages/Forms";
import { ChartsRoutes } from "../../DemoPages/Charts";
import { DashboardWidgetsRoutes } from "../../DemoPages/Widgets";
import PagesRoutes from "../../DemoPages/UserPages";
import { ApplicationsRoutes } from "../../DemoPages/Applications";
const AppMain = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(DemoLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "dashboards/crm" }) }), useDashboardsRoutes(), ElementsRoutes(), ComponentsRoutes(), TablesRoutes(), FormsRoutes(), ChartsRoutes(), DashboardWidgetsRoutes(), PagesRoutes(), ApplicationsRoutes()] }) }), _jsx(ToastContainer, {})] }));
};
export default AppMain;
