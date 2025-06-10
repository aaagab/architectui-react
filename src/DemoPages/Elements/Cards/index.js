import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import CardsBasicExample from "./Examples/Basic";
import CardsColors from "./Examples/Colors";
import CardsBlockLoadingExample from "./Examples/Loading";
import CardsAdvanced from "./Examples/Advanced";

export default class CardsExamples extends React.Component {
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
                                heading="Cards"
                                subheading="Wide selection of cards with multiple styles, borders, actions and hover effects."
                                icon="pe-7s-stopwatch icon-gradient bg-amy-crisp"
                            />
                            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab="Advanced" key="1">
                                    <CardsAdvanced />
                                </TabPane>
                                <TabPane tab="Basic" key="2">
                                    <CardsBasicExample />
                                </TabPane>
                                <TabPane tab="Color States" key="3">
                                    <CardsColors />
                                </TabPane>
                                <TabPane tab="Block Loading" key="4">
                                    <CardsBlockLoadingExample />
                                </TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
