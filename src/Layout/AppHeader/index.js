import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef } from "react";
import cx from "classnames";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HeaderLogo from "../AppLogo";
import SearchBox from "./Components/SearchBox";
import UserBox from "./Components/UserBox";
import { useSelector } from "react-redux";
const Header = () => {
    const o = useSelector(state => state.ThemeOptions);
    const ref = useRef(null);
    return (_jsx(Fragment, { children: _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: ref, component: "div", className: cx("app-header", o.headerBackgroundColor, {
                    "header-shadow": o.enableHeaderShadow,
                }), appear: true, timeout: 1500, enter: false, exit: false, children: _jsxs("div", { children: [_jsx(HeaderLogo, {}), _jsxs("div", { className: cx("app-header__content", {
                                "header-mobile-open": o.enableMobileMenuSmall,
                            }), children: [_jsx("div", { className: "app-header-left", children: _jsx(SearchBox, {}) }), _jsx("div", { className: "app-header-right", children: _jsx(UserBox, {}) })] })] }) }) }) }));
};
export default Header;
