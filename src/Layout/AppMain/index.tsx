import { Route, Navigate, Routes } from "react-router-dom";
import { DemoLayout } from "../../dev/demoLayout";

import { ToastContainer } from "react-toastify";
import { useDashboardsRoutes } from "../../DemoPages/Dashboards";


import { useElementsRoutes } from "../../DemoPages/Elements";
import { useComponentsRoutes } from "../../DemoPages/Components";
import { useTablesRoutes } from "../../DemoPages/Tables";
import { useFormsRoutes } from "../../DemoPages/Forms";
import { useChartsRoutes } from "../../DemoPages/Charts";
import { useDashboardWidgetsRoutes } from "../../DemoPages/Widgets";
import usePagesRoutes from "../../DemoPages/UserPages";
import { useApplicationsRoutes } from "../../DemoPages/Applications";

const AppMain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DemoLayout />}>
                    <Route index element={<Navigate to="dashboards/crm" />} />
                    {useDashboardsRoutes()}
                    {useElementsRoutes()}
                    {useComponentsRoutes()}
                    {useTablesRoutes()}
                    {useFormsRoutes()}
                    {useChartsRoutes()}
                    {useDashboardWidgetsRoutes()}
                    {usePagesRoutes()}
                    {useApplicationsRoutes()}
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
};

export default AppMain;
