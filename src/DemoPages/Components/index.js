import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from "react-router-dom";
import { lazy } from "react";
import CustomSuspense from "../../dev/customSuspense";
// COMPONENTS
// Tabs
const TabExample = lazy(() => import("./Tabs/"));
// Accordeon
const AccordionExample = lazy(() => import("./Accordion/"));
// Notifications
const NotificationsExamples = lazy(() => import("./Notifications/"));
// Block Loading
const BlockLoadingExample = lazy(() => import("./BlockLoading/"));
// Progress Bar
const ProgressBarsExamples = lazy(() => import("./ProgressBar/"));
// Tooltips & Popovers
const TooltipsPopoversExample = lazy(() => import("./TooltipsPopovers/"));
// Modals
const ModalsExample = lazy(() => import("./Modal/"));
// Ratings
const RatingsExample = lazy(() => import("./Ratings/"));
// Image Crop
const ImageCropExample = lazy(() => import("./ImageCropper/"));
// Carousel
const CarouselExample = lazy(() => import("./Carousel/"));
// Count Up
const CountUpExample = lazy(() => import("./CountUp/"));
// Sticky Elements
const StickyElements = lazy(() => import("./StickyElements/"));
// Scrollable Elements
const ScrollableElements = lazy(() => import("./ScrollableElements/"));
// Tree View
const TreeView = lazy(() => import("./TreeView/"));
// Guided Tours
const GuidedToursExample = lazy(() => import("./GuidedTours/"));
// Maps
const MapsExample = lazy(() => import("./Maps/"));
// Pagination
const PaginationExamples = lazy(() => import("./Pagination"));
// Calendar
const CalendarExample = lazy(() => import("./Calendar"));
export const ComponentsRoutes = () => {
    return (_jsxs(Route, { path: "components", element: _jsx(CustomSuspense, { text: "Components" }), children: [_jsx(Route, { path: "tabs", element: _jsx(TabExample, {}) }), _jsx(Route, { path: "accordions", element: _jsx(AccordionExample, {}) }), _jsx(Route, { path: "notifications", element: _jsx(NotificationsExamples, {}) }), _jsx(Route, { path: "loading-blocks", element: _jsx(BlockLoadingExample, {}) }), _jsx(Route, { path: "tooltips-popovers", element: _jsx(TooltipsPopoversExample, {}) }), _jsx(Route, { path: "progress-bar", element: _jsx(ProgressBarsExamples, {}) }), _jsx(Route, { path: "count-up", element: _jsx(CountUpExample, {}) }), _jsx(Route, { path: "sticky-elements", element: _jsx(StickyElements, {}) }), _jsx(Route, { path: "scrollable-elements", element: _jsx(ScrollableElements, {}) }), _jsx(Route, { path: "carousel", element: _jsx(CarouselExample, {}) }), _jsx(Route, { path: "calendar", element: _jsx(CalendarExample, {}) }), _jsx(Route, { path: "modals", element: _jsx(ModalsExample, {}) }), _jsx(Route, { path: "maps", element: _jsx(MapsExample, {}) }), _jsx(Route, { path: "image-crop", element: _jsx(ImageCropExample, {}) }), _jsx(Route, { path: "guided-tours", element: _jsx(GuidedToursExample, {}) }), _jsx(Route, { path: "pagination", element: _jsx(PaginationExamples, {}) }), _jsx(Route, { path: "ratings", element: _jsx(RatingsExample, {}) }), _jsx(Route, { path: "tree-view", element: _jsx(TreeView, {}) })] }));
};
