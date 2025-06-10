import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import VectorMapsExample from "./Examples/VectorMaps";
import GoogleMapsExample from "./Examples/GoogleMaps";

export default class MapsExample extends React.Component {
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
                                heading="Maps"
                                subheading="Implement in your applications Google or vector maps."
                                icon="pe-7s-map icon-gradient bg-premium-dark"
                            />
                            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab="Vector Maps" key="1">
                                    <VectorMapsExample />
                                </TabPane>
                                <TabPane tab="Google Maps" key="2">
                                    <GoogleMapsExample />
                                </TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
