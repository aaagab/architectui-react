import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Slider } from "react-burgers";

import cx from "classnames";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "reactstrap";

import {
  ThemeActions,
  type ThemeOptions,
} from "../../reducers/ThemeOptions";
import type { RootState } from "../../config/configureStore";

const AppMobileMenu = () => {
  const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
  const dispatch = useDispatch();
  const [active, setActive] = useState<Boolean>(false);
  const [activeSecondaryMenuMobile, setActiveSecondaryMenuMobile] = useState<Boolean>(false);

  const toggleMobileSidebar = () => {
    dispatch(ThemeActions.setEnableMobileMenu(!o.enableMobileMenu))
  };

  const toggleMobileSmall = () => {
    dispatch(ThemeActions.setEnableMobileMenu(!o.enableMobileMenuSmall))
  };

  return (
    <>
      <div className="app-header__mobile-menu">
        <div onClick={toggleMobileSidebar}>
          <Slider width={26} lineHeight={2} lineSpacing={5} color="#6c757d"
            active={active} onClick={() => setActive(!active)} />
        </div>
      </div>
      <div className="app-header__menu">
        <span onClick={toggleMobileSmall}>
          <Button size="sm" className={cx("btn-icon btn-icon-only", {
            active: activeSecondaryMenuMobile,
          })}
            color="primary"
            onClick={() =>
              setActiveSecondaryMenuMobile(!activeSecondaryMenuMobile)
            }>
            <div className="btn-icon-wrapper">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </Button>
        </span>
      </div>
    </>
  );
}

export default AppMobileMenu;