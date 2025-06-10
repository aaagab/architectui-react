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
    return (
        <Route path="components" element={<CustomSuspense text="Components" />}>
            {/* Tabs */}

            <Route path="tabs" element={<TabExample />} />

            {/* Accordion*/}

            <Route path="accordions" element={<AccordionExample />} />

            {/* Notifications */}

            <Route path="notifications" element={<NotificationsExamples />} />

            {/* Block Loading */}

            <Route path="loading-blocks" element={<BlockLoadingExample />} />

            {/* Tooltips & Popovers */}

            <Route
                path="tooltips-popovers"
                element={<TooltipsPopoversExample />}
            />

            {/* Progress Bar */}

            <Route path="progress-bar" element={<ProgressBarsExamples />} />

            {/* Count Up */}

            <Route path="count-up" element={<CountUpExample />} />

            {/* Sticky Elements */}

            <Route path="sticky-elements" element={<StickyElements />} />

            {/* Scrollable Elements */}

            <Route
                path="scrollable-elements"
                element={<ScrollableElements />}
            />

            {/* Carousel */}

            <Route path="carousel" element={<CarouselExample />} />

            {/* Calendar */}

            <Route path="calendar" element={<CalendarExample />} />

            {/* Modals */}

            <Route path="modals" element={<ModalsExample />} />

            {/* Maps */}

            <Route path="maps" element={<MapsExample />} />

            {/* Image Crop */}

            <Route path="image-crop" element={<ImageCropExample />} />

            {/* Guided Tours */}

            <Route path="guided-tours" element={<GuidedToursExample />} />

            {/* Pagination */}

            <Route path="pagination" element={<PaginationExamples />} />

            {/* Ratings */}

            <Route path="ratings" element={<RatingsExample />} />

            {/* Tree View */}

            <Route path="tree-view" element={<TreeView />} />
        </Route>
    );
};
