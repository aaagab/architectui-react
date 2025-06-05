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
    return (
        <>
            <Route path="dashboards" element={<CustomSuspense text="Dashboards" />}>
                <Route path="analytics" element={<AnalyticsDashboard />} />
                <Route path="sales" element={<SalesDashboard />} />
                <Route path="commerce" element={<CommerceDashboard />} />
                <Route path="crm" element={<CRMDashboard />} />
                <Route index element={<CRMDashboard />} />
                <Route
                    path="minimal-dashboard-1"
                    element={<MinimalDashboard1 />}
                />
                <Route
                    path="minimal-dashboard-2"
                    element={<MinimalDashboard2 />}
                />
            </Route>
        </>
    );
};
