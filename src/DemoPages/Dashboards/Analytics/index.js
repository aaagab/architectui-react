import React, { Component, Fragment, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
// import TabContent from "rc-tabs/lib/TabContent";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import AnalyticsDashboard1 from "./Examples/Variation1";
import AnalyticsDashboard2 from "./Examples/Variation2";

const AnalyticsDashboard = () => {
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition nodeRef={useRef()} component="div" classNames="TabsAnimation" appear={true} timeout={1500} enter={false} exit={false}>
                    <div>
                        <PageTitle
                            heading="Analytics Dashboard"
                            subheading="This is an example dashboard created using build-in elements and components."
                            icon="pe-7s-car icon-gradient bg-mean-fruit"
                        />
                        <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent animated={false} />}>
                            <TabPane tab="Variation 1" key="1">
                                <AnalyticsDashboard1 />
                            </TabPane>
                            <TabPane tab="Variation 2" key="2">
                                <AnalyticsDashboard2 />
                            </TabPane>
                        </Tabs>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default AnalyticsDashboard;
