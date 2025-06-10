import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
// Tables
const DataTableBasic = lazy(() => import("./DataTables/Examples/Basic"));
const DataTableFixedHeader = lazy(() => import("./DataTables/Examples/FixedHeader"));
const DataTablePivoting = lazy(() => import("./DataTables/Examples/Pivoting"));
const RegularTables = lazy(() => import("./RegularTables"));
export const TablesRoutes = () => {
    return (_jsxs(Route, { path: "tables", element: _jsx(CustomSuspense, { text: "Tables" }), children: [_jsx(Route, { path: "data-tables", element: _jsx(DataTableBasic, {}) }), _jsx(Route, { path: "datatables-fixed-header", element: _jsx(DataTableFixedHeader, {}) }), _jsx(Route, { path: "datatables-selectable-rows", element: _jsx(DataTablePivoting, {}) }), _jsx(Route, { path: "regular-tables", element: _jsx(RegularTables, {}) })] }));
};
