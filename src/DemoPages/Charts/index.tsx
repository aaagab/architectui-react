import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
import { lazy } from "react";

// Charts
const ChartsSparklines1 = lazy(() => import("./Sparklines1/"));
const ChartsSparklines2 = lazy(() => import("./Sparklines2/"));
const ChartsChartJs = lazy(() => import("./ChartJs/"));
const ChartsGauges = lazy(() => import("./Gauges/"));
const ApexCharts = lazy(() => import("./ApexCharts/"));

export const ChartsRoutes = () => (
  <Route path="charts" element={<CustomSuspense text="Charts" />}>
    <Route path="sparklines-1" element={<ChartsSparklines1 />} />
    <Route path="sparklines-2" element={<ChartsSparklines2 />} />
    <Route path="chartjs" element={<ChartsChartJs />} />
    <Route path="gauges" element={<ChartsGauges />} />
    <Route path="apexcharts" element={<ApexCharts />} />
  </Route>
);
