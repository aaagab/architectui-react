import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
import { lazy } from "react";
// BUTTONS
// Standard
const ButtonsStandard = lazy(() => import("./Button/Standard/"));
// Pills
const ButtonsPill = lazy(() => import("./Button/Pill/"));
// Shadows
const ButtonsShadow = lazy(() => import("./Button/Shadow/"));
// Square
const ButtonsSquare = lazy(() => import("./Button/Square/"));
// Icons
const ButtonsIcons = lazy(() => import("./Button/Icons/"));
// DROPDOWNS
const DropdownExamples = lazy(() => import("./Dropdowns/"));
// BADGES & LABELS
const BadgesLabels = lazy(() => import("./BadgesLabels/"));
// ICONS
const IconsExamples = lazy(() => import("./Icons/"));
// CARDS
const CardsExamples = lazy(() => import("./Cards/"));
// LOADERS
const LoadersExample = lazy(() => import("../Elements/Loaders/"));
// LIST GROUP
const ListGroupExample = lazy(() => import("../Elements/ListGroup/"));
// TIMELINE
const TimelineExample = lazy(() => import("../Elements/Timeline/"));
// NAVIGATION
const NavigationExample = lazy(() => import("./Navs/"));
// DRAG & DROP
const ScreenVisibilityExamples = lazy(() => import("./ScreenVisibility/"));
// UTILITIES
const UtilitiesExamples = lazy(() => import("../Elements/Utilities/"));
export const ElementsRoutes = () => {
    return (_jsxs(Route, { path: "elements", element: _jsx(CustomSuspense, { text: "Elements" }), children: [_jsx(Route, { path: "buttons-standard", element: _jsx(ButtonsStandard, {}) }), _jsx(Route, { path: "buttons-square", element: _jsx(ButtonsSquare, {}) }), _jsx(Route, { path: "buttons-pills", element: _jsx(ButtonsPill, {}) }), _jsx(Route, { path: "buttons-shadow", element: _jsx(ButtonsShadow, {}) }), _jsx(Route, { path: "buttons-icons", element: _jsx(ButtonsIcons, {}) }), _jsx(Route, { path: "dropdowns", element: _jsx(DropdownExamples, {}) }), _jsx(Route, { path: "badges-labels", element: _jsx(BadgesLabels, {}) }), _jsx(Route, { path: "icons", element: _jsx(IconsExamples, {}) }), _jsx(Route, { path: "cards", element: _jsx(CardsExamples, {}) }), _jsx(Route, { path: "loaders", element: _jsx(LoadersExample, {}) }), _jsx(Route, { path: "list-group", element: _jsx(ListGroupExample, {}) }), _jsx(Route, { path: "timelines", element: _jsx(TimelineExample, {}) }), _jsx(Route, { path: "navigation", element: _jsx(NavigationExample, {}) }), _jsx(Route, { path: "visibility-sensor", element: _jsx(ScreenVisibilityExamples, {}) }), _jsx(Route, { path: "utilities", element: _jsx(UtilitiesExamples, {}) })] }));
};
