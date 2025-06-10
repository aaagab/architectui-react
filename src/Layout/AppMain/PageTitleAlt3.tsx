import { Fragment } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import TitleComponent1 from "./PageTitleAlt3Examples/Variation1";
import TitleComponent2 from "./PageTitleAlt3Examples/Variation2";
import TitleComponent3 from "./PageTitleAlt3Examples/Variation3";
import TitleComponent4 from "./PageTitleAlt3Examples/Variation4";
import type { RootState } from "../../config/configureStore";
import type { ThemeOptions } from "../../reducers/ThemeOptions";

const PageTitleAlt3 = ({ heading, icon, subheading }: { heading: string, icon: string, subheading: string }) => {
  const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
  const randomize = (myArray: Array<TitleComponent1 | TitleComponent2 | TitleComponent3>) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  var arr = [<TitleComponent1 />, <TitleComponent2 />, <TitleComponent4 />];

  return (
    <Fragment>
      <div className="app-page-title app-page-title-simple">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div>
              <div className="page-title-head center-elem">
                <span className={cx("d-inline-block pe-2", {
                  "d-none": !o.enablePageTitleIcon,
                })}>
                  <i className={icon} />
                </span>
                <span className="d-inline-block">{heading}</span>
              </div>

              <div className={cx("page-title-subheading opacity-10", {
                "d-none": !o.enablePageTitleSubheading,
              })}>
                <TitleComponent3 subheading={subheading} />
              </div>
            </div>
          </div>
          <div className="page-title-actions">{randomize(arr)}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default PageTitleAlt3;