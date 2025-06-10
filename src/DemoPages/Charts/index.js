import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
import { lazy } from "react";
// Charts
const ChartsSparklines1 = lazy(() => import("./Sparklines1/"));
const ChartsSparklines2 = lazy(() => import("./Sparklines2/"));
const ChartsChartJs = lazy(() => import("./ChartJs/"));
const ChartsGauges = lazy(() => import("./Gauges/"));
const ApexCharts = lazy(() => import("./ApexCharts/"));
export const ChartsRoutes = () => (_jsxs(Route, { path: "charts", element: _jsx(CustomSuspense, { text: "Charts" }), children: [_jsx(Route, { path: "sparklines-1", element: _jsx(ChartsSparklines1, {}) }), _jsx(Route, { path: "sparklines-2", element: _jsx(ChartsSparklines2, {}) }), _jsx(Route, { path: "chartjs", element: _jsx(ChartsChartJs, {}) }), _jsx(Route, { path: "gauges", element: _jsx(ChartsGauges, {}) }), _jsx(Route, { path: "apexcharts", element: _jsx(ApexCharts, {}) })] }));
