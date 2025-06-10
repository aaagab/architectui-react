import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "react-burgers";
import AppMobileMenu from "../AppMobileMenu";
import { ThemeActions, } from "../../reducers/ThemeOptions";
const HeaderLogo = () => {
    const o = useSelector(state => state.ThemeOptions);
    const dispatch = useDispatch();
    const [active, setActive] = useState(true);
    const toggleEnableClosedSidebar = () => {
        dispatch(ThemeActions.setEnableClosedSidebar(!o.enableClosedSidebar));
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "app-header__logo", children: [_jsx("div", { className: "logo-src" }), _jsx("div", { className: "header__pane ms-auto", children: _jsx("div", { onClick: toggleEnableClosedSidebar, children: _jsx(Slider, { width: 26, lineHeight: 2, lineSpacing: 5, color: "#6c757d", active: active, onClick: () => setActive(!active) }) }) })] }), _jsx(AppMobileMenu, {})] }));
};
export default HeaderLogo;
