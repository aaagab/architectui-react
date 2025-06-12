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

const elem = () => <><div>Home</div></>;

const AppMain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DemoLayout />}>
                    <Route index element={<Navigate to="dashboards/crm" />} />
                    {useDashboardsRoutes()}
                    {ElementsRoutes()}
                    {ComponentsRoutes()}
                    {TablesRoutes()}
                    {FormsRoutes()}
                    {ChartsRoutes()}
                    {DashboardWidgetsRoutes()}
                    {PagesRoutes()}
                    {ApplicationsRoutes()}
                </Route>
            </Routes >
            <ToastContainer />
        </>
    );
};

export default AppMain;
