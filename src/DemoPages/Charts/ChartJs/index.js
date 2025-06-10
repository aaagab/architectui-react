import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
// Examples
import ChartJsCircular from "./Examples/Circular";
import ChartJsLinesBars from "./Examples/LinesBars";
const ChartJSExamples = () => {
    return (_jsx(Fragment, { children: _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: useRef(), component: "div", classNames: "TabsAnimation", appear: true, timeout: 1500, enter: false, exit: false, children: _jsxs("div", { children: [_jsx(PageTitle, { heading: "ChartJS", subheading: "Huge selection of charts created with the React ChartJS Plugin", icon: "pe-7s-bandaid icon-gradient bg-amy-crisp" }), _jsxs(Tabs, { defaultActiveKey: "1", renderTabBar: () => _jsx(ScrollableInkTabBar, {}), renderTabContent: () => _jsx(TabContent, {}), children: [_jsx(TabPane, { tab: "Circular Charts", children: _jsx(ChartJsCircular, {}) }, "1"), _jsx(TabPane, { tab: "Lines & Bars Charts", children: _jsx(ChartJsLinesBars, {}) }, "2")] })] }) }) }) }));
};
export default ChartJSExamples;
