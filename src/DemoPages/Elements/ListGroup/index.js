import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import ListGroupExampleBasic from "./Examples/Basic/";
import ListGroupExampleAdvanced from "./Examples/Advanced";

export default class ListGroupExample extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition nodeRef={this.ref} component="div" classNames="TabsAnimation" appear={true} timeout={1500} enter={false} exit={false}>
                        <div>
                            <PageTitle
                                heading="List Groups"
                                subheading="These can be used with other components and elements to create stunning and unique new elements for your UIs."
                                icon="pe-7s-paint icon-gradient bg-sunny-morning"
                            />
                            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab="Advanced" key="1">
                                    <ListGroupExampleAdvanced />
                                </TabPane>
                                <TabPane tab="Basic" key="2">
                                    <ListGroupExampleBasic />
                                </TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
