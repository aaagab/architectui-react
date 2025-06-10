import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
// USER PAGES
const Login = lazy(() => import("./Login/"));
const LoginBoxed = lazy(() => import("./LoginBoxed/"));
const Register = lazy(() => import("./Register/"));
const RegisterBoxed = lazy(() => import("./RegisterBoxed/"));
const ForgotPassword = lazy(() => import("./ForgotPassword/"));
const ForgotPasswordBoxed = lazy(() => import("./ForgotPasswordBoxed/"));
const usePagesRoutes = () => (_jsxs(Route, { path: "pages", element: _jsx(CustomSuspense, { text: "Pages" }), children: [_jsx(Route, { path: "login", element: _jsx(Login, {}) }), _jsx(Route, { path: "login-boxed", element: _jsx(LoginBoxed, {}) }), _jsx(Route, { path: "register", element: _jsx(Register, {}) }), _jsx(Route, { path: "register-boxed", element: _jsx(RegisterBoxed, {}) }), _jsx(Route, { path: "forgot-password", element: _jsx(ForgotPassword, {}) }), _jsx(Route, { path: "forgot-password-boxed", element: _jsx(ForgotPasswordBoxed, {}) })] }));
export default usePagesRoutes;
