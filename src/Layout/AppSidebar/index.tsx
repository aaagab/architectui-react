import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { Nav } from "../AppNav/VerticalNavWrapper.tsx";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo/index.tsx";

import { ThemeActions, type ThemeOptions } from "../../reducers/ThemeOptions";
import type { RootState } from "../../config/configureStore.ts";
import { useRef } from "react";

const AppSidebar = () => {
    const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
    const dispatch = useDispatch();
    const toggleMobileSidebar = () => {
        dispatch(ThemeActions.setEnableMobileMenu(!o.enableMobileMenu));
    };

    return (
        <>
            <div
                className="sidebar-mobile-overlay"
                onClick={toggleMobileSidebar}
            />
            <TransitionGroup>
                <CSSTransition nodeRef={useRef()} component="div"
                    className={cx("app-sidebar", o.backgroundColor, {
                        "sidebar-shadow": o.enableSidebarShadow,
                    })}
                    appear={true}
                    enter={false}
                    exit={false}
                    timeout={500}
                >
                    <div>
                        <HeaderLogo />
                        <PerfectScrollbar>
                            <div className="app-sidebar__inner">
                                <Nav />
                            </div>
                        </PerfectScrollbar>
                        <div
                            className={cx(
                                "app-sidebar-bg",
                                o.backgroundImageOpacity
                            )}
                            style={{
                                backgroundImage: o.enableBackgroundImage
                                    ? "url(" + o.backgroundImage + ")"
                                    : undefined,
                            }}
                        ></div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default AppSidebar;
