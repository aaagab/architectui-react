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

export const useElementsRoutes = () => {
    return (
        <Route path="elements" element={<CustomSuspense text="Elements" />}>
            {/* Buttons */}
            <Route path="buttons-standard" element={<ButtonsStandard />} />
            <Route path="buttons-square" element={<ButtonsSquare />} />
            <Route path="buttons-pills" element={<ButtonsPill />} />
            <Route path="buttons-shadow" element={<ButtonsShadow />} />
            <Route path="buttons-icons" element={<ButtonsIcons />} />

            {/* Dropdowns */}

            <Route path="dropdowns" element={<DropdownExamples />} />

            {/* Badges & Labels */}

            <Route path="badges-labels" element={<BadgesLabels />} />

            {/* Icons */}

            <Route path="icons" element={<IconsExamples />} />

            {/* Cards */}

            <Route path="cards" element={<CardsExamples />} />

            {/* Loaders */}

            <Route path="loaders" element={<LoadersExample />} />

            {/* List Group */}

            <Route path="list-group" element={<ListGroupExample />} />

            {/* Timeline */}

            <Route path="timelines" element={<TimelineExample />} />

            {/* Navs */}

            <Route path="navigation" element={<NavigationExample />} />

            {/* Screen Visibility */}

            <Route
                path="visibility-sensor"
                element={<ScreenVisibilityExamples />}
            />

            {/* Utilities */}

            <Route path="utilities" element={<UtilitiesExamples />} />
        </Route>
    );
};
