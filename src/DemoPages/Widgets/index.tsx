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

export const useDashboardWidgetsRoutes = () => (
  <Route path="widgets" element={<CustomSuspense text="Dashboard Widgets" />}>
    <Route path="chart-boxes" element={<WidgetsChartBoxes />} />
    <Route path="chart-boxes-2" element={<WidgetsChartBoxes2 />} />
    <Route path="chart-boxes-3" element={<WidgetsChartBoxes3 />} />
    <Route path="profile-boxes" element={<WidgetsProfileBoxes />} />
    <Route path="content-boxes" element={<WidgetsContentBoxes />} />
  </Route>
);
