import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense } from "react";
import Loader from "react-loaders";
import { Outlet, useLocation } from "react-router-dom";
const CustomSuspense = ({ text }) => {
    const location = useLocation();
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: _jsx("div", { className: "custom-loader-container", children: _jsxs("div", { className: "loader-container-inner", children: [_jsx("div", { className: "text-center", children: _jsx(Loader, { type: "ball-beat", active: true }) }), _jsxs("h6", { className: "mt-3", children: ["Please wait while we load all the ", text, "examples", _jsxs("small", { children: ["Because this is a demonstration, we load at once all the ", text, " examples. This wouldn't happen in a real live app!"] })] })] }) }), children: _jsx(Outlet, {}) }, location.key) }));
};
export default CustomSuspense;
