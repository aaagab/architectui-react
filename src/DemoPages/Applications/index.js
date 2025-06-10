import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
// APPLICATIONS
const Mailbox = lazy(() => import("./Mailbox"));
const Chat = lazy(() => import("./Chat"));
const FaqSection = lazy(() => import("./FaqSection"));
export const ApplicationsRoutes = () => (_jsxs(Route, { path: "applications", element: _jsx(CustomSuspense, { text: "Applications" }), children: [_jsx(Route, { path: "mailbox", element: _jsx(Mailbox, {}) }), _jsx(Route, { path: "chat", element: _jsx(Chat, {}) }), _jsx(Route, { path: "faq-section", element: _jsx(FaqSection, {}) })] }));
