import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import cx from "classnames";
import TitleComponent1 from "./PageTitleExamples/Variation1";
import TitleComponent2 from "./PageTitleExamples/Variation2";
import TitleComponent3 from "./PageTitleExamples/Variation3";
const PageTitle = ({ heading, icon, subheading }) => {
    const o = useSelector(state => state.ThemeOptions);
    const randomize = (myArray) => {
        return myArray[Math.floor(Math.random() * myArray.length)];
    };
    var arr = [_jsx(TitleComponent1, {}), _jsx(TitleComponent2, {}), _jsx(TitleComponent3, {})];
    return (_jsx("div", { className: "app-page-title", children: _jsxs("div", { className: "page-title-wrapper", children: [_jsxs("div", { className: "page-title-heading", children: [_jsx("div", { className: cx("page-title-icon", {
                                "d-none": !o.enablePageTitleIcon,
                            }), children: _jsx("i", { className: icon }) }), _jsxs("div", { children: [heading, _jsx("div", { className: cx("page-title-subheading", {
                                        "d-none": !o.enablePageTitleSubheading,
                                    }), children: subheading })] })] }), _jsx("div", { className: "page-title-actions", children: randomize(arr) })] }) }));
};
export default PageTitle;
