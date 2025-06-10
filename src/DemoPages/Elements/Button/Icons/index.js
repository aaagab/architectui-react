import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import ButtonsHorizontalIcons from "./Examples/Horizontal";
import ButtonsVerticalIcons from "./Examples/Vertical";

export default class ButtonsIcons extends React.Component {
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
                                heading="Buttons with Icons"
                                subheading="These buttons examples contain icons with or without labels attached."
                                icon="pe-7s-hourglass icon-gradient bg-ripe-malin"
                            />
                            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                                <TabPane tab="Horizontal Icons" key="1">
                                    <ButtonsHorizontalIcons />
                                </TabPane>
                                <TabPane tab="Vertical Icons" key="2">
                                    <ButtonsVerticalIcons />
                                </TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
