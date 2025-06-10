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
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition nodeRef={useRef()} component="div" classNames="TabsAnimation" appear={true} timeout={1500} enter={false} exit={false}>
                    <div>
                        <PageTitle
                            heading="ChartJS"
                            subheading="Huge selection of charts created with the React ChartJS Plugin"
                            icon="pe-7s-bandaid icon-gradient bg-amy-crisp"
                        />
                        <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                            <TabPane tab="Circular Charts" key="1">
                                <ChartJsCircular />
                            </TabPane>
                            <TabPane tab="Lines & Bars Charts" key="2">
                                <ChartJsLinesBars />
                            </TabPane>
                        </Tabs>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
}

export default ChartJSExamples;