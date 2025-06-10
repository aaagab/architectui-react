import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import PopoversExample from "./Examples/Popovers/";
import TooltipsExample from "./Examples/Tooltips/";

export default class TooltipsPopoversExample extends React.Component {
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
                                heading="Tooltips & Popovers"
                                subheading="These React components are used to add interaction or extra information for your app's content."
                                icon="pe-7s-note2 icon-gradient bg-happy-fisher"
                            />
                            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab="Popovers" key="1">
                                    <PopoversExample />
                                </TabPane>
                                <TabPane tab="Tooltips" key="2">
                                    <TooltipsExample />
                                </TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
