import { useSelector } from "react-redux";
import cx from "classnames";

import TitleComponent1 from "./PageTitleExamples/Variation1";
import TitleComponent2 from "./PageTitleExamples/Variation2";
import TitleComponent3 from "./PageTitleExamples/Variation3";
import type { RootState } from "../../config/configureStore";
import type { ThemeOptions } from "../../reducers/ThemeOptions";

const PageTitle = ({ heading, icon, subheading }: { heading: string, icon: string, subheading: string }) => {
  const o = useSelector<RootState, ThemeOptions>(state => state.ThemeOptions);
  const randomize = (myArray: Array<TitleComponent1 | TitleComponent2 | TitleComponent3>) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  var arr = [<TitleComponent1 />, <TitleComponent2 />, <TitleComponent3 />];

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className={cx("page-title-icon", {
            "d-none": !o.enablePageTitleIcon,
          })}>
            <i className={icon} />
          </div>
          <div>
            {heading}
            <div className={cx("page-title-subheading", {
              "d-none": !o.enablePageTitleSubheading,
            })}>
              {subheading}
            </div>
          </div>
        </div>
        <div className="page-title-actions">{randomize(arr)}</div>
      </div>
    </div>
  );
}

export default PageTitle;
