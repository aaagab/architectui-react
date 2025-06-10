import { useSelector } from "react-redux";
import cx from "classnames";

import { Button, UncontrolledTooltip } from "reactstrap";

import { toast, Slide } from "react-toastify";

import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { RootState } from "../../config/configureStore";
import type { ThemeOptions } from "../../reducers/ThemeOptions";

const PageTitle2 = ({ heading, icon, subheading }: { heading: string, icon: string, subheading: string }) => {
    const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);

    const notify22 = () =>
        toast("You can add whatever element in this section.", {
            transition: Slide,
            closeButton: true,
            autoClose: 5000,
            position: "bottom-center",
            type: "default",
        });

    return (
        <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div
                        className={cx("page-title-icon rounded-circle", {
                            "d-none": !o.enablePageTitleIcon,
                        })}
                    >
                        <i className={icon} />
                    </div>
                    <div>
                        {heading}
                        <div
                            className={cx("page-title-subheading", {
                                "d-none": !o.enablePageTitleSubheading,
                            })}
                        >
                            {subheading}
                        </div>
                    </div>
                </div>
                <div className="page-title-actions">
                    <Button
                        className="btn-pill btn-shadow me-3"
                        onClick={notify22}
                        color="success"
                        id="Tooltip-123"
                    >
                        <FontAwesomeIcon icon={faBatteryThreeQuarters} />
                    </Button>
                    <UncontrolledTooltip
                        placement="left"
                        target={"Tooltip-123"}
                    >
                        A notification example!
                    </UncontrolledTooltip>
                </div>
            </div>
        </div>
    );
}

export default PageTitle2