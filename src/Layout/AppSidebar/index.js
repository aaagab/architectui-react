import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import { Nav } from "../AppNav/VerticalNavWrapper.tsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo/index.tsx";
import { ThemeActions } from "../../reducers/ThemeOptions";
import { useRef } from "react";
const AppSidebar = () => {
    const o = useSelector(state => state.ThemeOptions);
    const dispatch = useDispatch();
    const toggleMobileSidebar = () => {
        dispatch(ThemeActions.setEnableMobileMenu(!o.enableMobileMenu));
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "sidebar-mobile-overlay", onClick: toggleMobileSidebar }), _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: useRef(), component: "div", className: cx("app-sidebar", o.backgroundColor, {
                        "sidebar-shadow": o.enableSidebarShadow,
                    }), appear: true, enter: false, exit: false, timeout: 500, children: _jsxs("div", { children: [_jsx(HeaderLogo, {}), _jsx(PerfectScrollbar, { children: _jsx("div", { className: "app-sidebar__inner", children: _jsx(Nav, {}) }) }), _jsx("div", { className: cx("app-sidebar-bg", o.backgroundImageOpacity), style: {
                                    backgroundImage: o.enableBackgroundImage
                                        ? "url(" + o.backgroundImage + ")"
                                        : undefined,
                                } })] }) }) })] }));
};
export default AppSidebar;
