import { useSelector } from "react-redux";
import cx from "classnames";
import type { ThemeOptions } from "../../reducers/ThemeOptions";

import { useResizeDetector } from "react-resize-detector";
import AppMain from "../../Layout/AppMain";
import type { RootState } from "../../config/configureStore";
import { useCallback, useEffect } from "react";

const Main = () => {
    const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
    const { width, ref } = useResizeDetector({
        handleHeight: false,
        refreshMode: 'debounce',
        refreshRate: 1000,
        onResize: useCallback(() => {

        }, []),
    });
    useEffect(() => {

    }, [])
    return (
        <div
            ref={ref}
            className={cx(
                "app-container app-theme-" + o.colorScheme,
                { "fixed-header": o.enableFixedHeader },
                {
                    "fixed-sidebar":
                        o.enableFixedSidebar || width && width < 1250,
                },
                { "fixed-footer": o.enableFixedFooter },
                {
                    "closed-sidebar":
                        o.enableClosedSidebar || width && width < 1250,
                },
                {
                    "closed-sidebar-mobile":
                        o.closedSmallerSidebar || width && width < 1250,
                },
                { "sidebar-mobile-open": o.enableMobileMenu },
                { "body-tabs-shadow-btn": o.enablePageTabsAlt }
            )}
        >
            <AppMain />
        </div>
    )
}

export default Main;
