import React, { createRef, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GoogleMapReact from "google-map-react";

import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapsExample extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }
    static defaultProps = {
        center: {
            lat: 26.200018848999502,
            lng: -98.25937072883535,
        },
        zoom: 11,
    };

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition nodeRef={this.ref} component="div" classNames="TabsAnimation" appear={true} timeout={0} enter={false} exit={false}>
                        <Container fluid>
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Basic</CardTitle>
                                            <div
                                                style={{
                                                    height: "100vh",
                                                    width: "100%",
                                                }}
                                            >
                                                <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                                                    <AnyReactComponent lat={26.200018848999502} lng={-98.25937072883535} text={"Example Text"} />
                                                </GoogleMapReact>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default GoogleMapsExample;
