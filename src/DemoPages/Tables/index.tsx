import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";

// Tables
const DataTableBasic = lazy(() => import("./DataTables/Examples/Basic"));
const DataTableFixedHeader = lazy(() => import("./DataTables/Examples/FixedHeader"));
const DataTablePivoting = lazy(() => import("./DataTables/Examples/Pivoting"));
const RegularTables = lazy(() => import("./RegularTables"));

export const TablesRoutes = () => {
    return (
        <Route path="tables" element={<CustomSuspense text="Tables" />}>
            <Route path="data-tables" element={<DataTableBasic />} />
            <Route
                path="datatables-fixed-header"
                element={<DataTableFixedHeader />}
            />
            <Route
                path="datatables-selectable-rows"
                element={<DataTablePivoting />}
            />
            <Route path="regular-tables" element={<RegularTables />} />
        </Route>
    );
};
