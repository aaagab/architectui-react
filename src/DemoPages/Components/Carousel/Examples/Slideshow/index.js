import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import SimpleSlider from "./SimpleSlider";
import MultipleItems from "./MultipleItems";
import CenterMode from "./CenterMode";
import Responsive from "./Responsive";
import VariableWidth from "./VariableWidth";
import DarkImg from "./DarkImg";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

// const Slides = ({innerRef}) => {
//     return ()
// }

class SlideshowExample extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        this.ref2 = createRef();
    }
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition nodeRef={this.ref} component="div" classNames="TabsAnimation" appear={true} timeout={1500} enter={false} exit={false}>
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Full width Slider</CardTitle>
                                        <SimpleSlider />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Multiple Items</CardTitle>
                                        <MultipleItems />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Center Mode</CardTitle>
                                        <CenterMode />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>f</CardTitle>
                                        <VariableWidth />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Responsive</CardTitle>
                                        <Responsive />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Inverted + Images</CardTitle>
                                        <DarkImg />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default SlideshowExample;
