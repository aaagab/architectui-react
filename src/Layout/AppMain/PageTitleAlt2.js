import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import cx from "classnames";
import { Button, UncontrolledTooltip } from "reactstrap";
import { toast, Slide } from "react-toastify";
import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PageTitle2 = ({ heading, icon, subheading }) => {
    const o = useSelector(state => state.ThemeOptions);
    const notify22 = () => toast("You can add whatever element in this section.", {
        transition: Slide,
        closeButton: true,
        autoClose: 5000,
        position: "bottom-center",
        type: "default",
    });
    return (_jsx("div", { className: "app-page-title", children: _jsxs("div", { className: "page-title-wrapper", children: [_jsxs("div", { className: "page-title-heading", children: [_jsx("div", { className: cx("page-title-icon rounded-circle", {
                                "d-none": !o.enablePageTitleIcon,
                            }), children: _jsx("i", { className: icon }) }), _jsxs("div", { children: [heading, _jsx("div", { className: cx("page-title-subheading", {
                                        "d-none": !o.enablePageTitleSubheading,
                                    }), children: subheading })] })] }), _jsxs("div", { className: "page-title-actions", children: [_jsx(Button, { className: "btn-pill btn-shadow me-3", onClick: notify22, color: "success", id: "Tooltip-123", children: _jsx(FontAwesomeIcon, { icon: faBatteryThreeQuarters }) }), _jsx(UncontrolledTooltip, { placement: "left", target: "Tooltip-123", children: "A notification example!" })] })] }) }));
};
export default PageTitle2;
