import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
import TitleComponent1 from "./PageTitleAlt3Examples/Variation1";
import TitleComponent2 from "./PageTitleAlt3Examples/Variation2";
import TitleComponent3 from "./PageTitleAlt3Examples/Variation3";
import TitleComponent4 from "./PageTitleAlt3Examples/Variation4";
const PageTitleAlt3 = ({ heading, icon, subheading }) => {
    const o = useSelector(state => state.ThemeOptions);
    const randomize = (myArray) => {
        return myArray[Math.floor(Math.random() * myArray.length)];
    };
    var arr = [_jsx(TitleComponent1, {}), _jsx(TitleComponent2, {}), _jsx(TitleComponent4, {})];
    return (_jsx(Fragment, { children: _jsx("div", { className: "app-page-title app-page-title-simple", children: _jsxs("div", { className: "page-title-wrapper", children: [_jsx("div", { className: "page-title-heading", children: _jsxs("div", { children: [_jsxs("div", { className: "page-title-head center-elem", children: [_jsx("span", { className: cx("d-inline-block pe-2", {
                                                "d-none": !o.enablePageTitleIcon,
                                            }), children: _jsx("i", { className: icon }) }), _jsx("span", { className: "d-inline-block", children: heading })] }), _jsx("div", { className: cx("page-title-subheading opacity-10", {
                                        "d-none": !o.enablePageTitleSubheading,
                                    }), children: _jsx(TitleComponent3, { subheading: subheading }) })] }) }), _jsx("div", { className: "page-title-actions", children: randomize(arr) })] }) }) }));
};
export default PageTitleAlt3;
