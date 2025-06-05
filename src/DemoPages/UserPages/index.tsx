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

const usePagesRoutes = () => (
  <Route path="pages" element={<CustomSuspense text="Pages" />}>
    <Route path="login" element={<Login />} />
    <Route path="login-boxed" element={<LoginBoxed />} />
    <Route path="register" element={<Register />} />
    <Route path="register-boxed" element={<RegisterBoxed />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="forgot-password-boxed" element={<ForgotPasswordBoxed />} />
  </Route>
);

export default usePagesRoutes;
