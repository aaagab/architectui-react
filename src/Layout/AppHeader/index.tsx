import { Fragment, useRef } from "react";
import cx from "classnames";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HeaderLogo from "../AppLogo";

import SearchBox from "./Components/SearchBox";
import UserBox from "./Components/UserBox";
import { useSelector } from "react-redux";
import type { RootState } from "../../config/configureStore";
import type { ThemeOptions } from "../../reducers/ThemeOptions";

const Header = () => {
  const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
  const ref = useRef(null);
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition nodeRef={ref} component="div"
          className={cx("app-header", o.headerBackgroundColor, {
            "header-shadow": o.enableHeaderShadow,
          })}
          appear={true} timeout={1500} enter={false} exit={false}>
          <div>
            <HeaderLogo />
            <div className={cx("app-header__content", {
              "header-mobile-open": o.enableMobileMenuSmall,
            })}>
              <div className="app-header-left">
                <SearchBox />
              </div>
              <div className="app-header-right">
                <UserBox />
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}

export default Header;
