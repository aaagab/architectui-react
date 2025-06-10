import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
// CHART BOXES
// CONTENT BOXES
// PROFILE BOXES
// Dashboard Widgets
const WidgetsProfileBoxes = lazy(() => import("./ProfileBoxes/"));
const WidgetsChartBoxes = lazy(() => import("./ChartBoxes/"));
const WidgetsChartBoxes2 = lazy(() => import("./ChartBoxes2/"));
const WidgetsChartBoxes3 = lazy(() => import("./ChartBoxes3/"));
const WidgetsContentBoxes = lazy(() => import("./ContentBoxes/"));
export const DashboardWidgetsRoutes = () => (_jsxs(Route, { path: "widgets", element: _jsx(CustomSuspense, { text: "Dashboard Widgets" }), children: [_jsx(Route, { path: "chart-boxes", element: _jsx(WidgetsChartBoxes, {}) }), _jsx(Route, { path: "chart-boxes-2", element: _jsx(WidgetsChartBoxes2, {}) }), _jsx(Route, { path: "chart-boxes-3", element: _jsx(WidgetsChartBoxes3, {}) }), _jsx(Route, { path: "profile-boxes", element: _jsx(WidgetsProfileBoxes, {}) }), _jsx(Route, { path: "content-boxes", element: _jsx(WidgetsContentBoxes, {}) })] }));
