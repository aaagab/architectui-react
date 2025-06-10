import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "react-burgers";
import cx from "classnames";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { ThemeActions, } from "../../reducers/ThemeOptions";
const AppMobileMenu = () => {
    const o = useSelector(state => state.ThemeOptions);
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [activeSecondaryMenuMobile, setActiveSecondaryMenuMobile] = useState(false);
    const toggleMobileSidebar = () => {
        dispatch(ThemeActions.setEnableMobileMenu(!o.enableMobileMenu));
    };
    const toggleMobileSmall = () => {
        dispatch(ThemeActions.setEnableMobileMenu(!o.enableMobileMenuSmall));
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "app-header__mobile-menu", children: _jsx("div", { onClick: toggleMobileSidebar, children: _jsx(Slider, { width: 26, lineHeight: 2, lineSpacing: 5, color: "#6c757d", active: active, onClick: () => setActive(!active) }) }) }), _jsx("div", { className: "app-header__menu", children: _jsx("span", { onClick: toggleMobileSmall, children: _jsx(Button, { size: "sm", className: cx("btn-icon btn-icon-only", {
                            active: activeSecondaryMenuMobile,
                        }), color: "primary", onClick: () => setActiveSecondaryMenuMobile(!activeSecondaryMenuMobile), children: _jsx("div", { className: "btn-icon-wrapper", children: _jsx(FontAwesomeIcon, { icon: faEllipsisV }) }) }) }) })] }));
};
export default AppMobileMenu;
