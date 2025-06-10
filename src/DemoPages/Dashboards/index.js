import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
// DASHBOARDS
const AnalyticsDashboard = lazy(() => import("./Analytics/"));
const SalesDashboard = lazy(() => import("./Sales/"));
const CommerceDashboard = lazy(() => import("./Commerce/"));
const CRMDashboard = lazy(() => import("./CRM/"));
const MinimalDashboard1 = lazy(() => import("./Minimal/Variation1"));
const MinimalDashboard2 = lazy(() => import("./Minimal/Variation2"));
export const useDashboardsRoutes = () => {
    return (_jsx(_Fragment, { children: _jsxs(Route, { path: "dashboards", element: _jsx(CustomSuspense, { text: "Dashboards" }), children: [_jsx(Route, { path: "analytics", element: _jsx(AnalyticsDashboard, {}) }), _jsx(Route, { path: "sales", element: _jsx(SalesDashboard, {}) }), _jsx(Route, { path: "commerce", element: _jsx(CommerceDashboard, {}) }), _jsx(Route, { path: "crm", element: _jsx(CRMDashboard, {}) }), _jsx(Route, { index: true, element: _jsx(CRMDashboard, {}) }), _jsx(Route, { path: "minimal-dashboard-1", element: _jsx(MinimalDashboard1, {}) }), _jsx(Route, { path: "minimal-dashboard-2", element: _jsx(MinimalDashboard2, {}) })] }) }));
};
