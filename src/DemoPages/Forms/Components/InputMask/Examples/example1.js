import React, { createRef, Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle, InputGroup } from "reactstrap";

// import InputMask from "react-input-mask";
import InputMask from "../../../../../dev/react-input-mask";

import { faCalendarAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FormInputMaskExample extends React.Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    state = {
        value: "",
        mask: "9999-9999-9999-9999",
    };

    onChange = (event) => {
        var value = event.target.value;
        var newState = {
            mask: "9999-9999-9999-9999",
            value: value,
        };
        if (/^3[47]/.test(value)) {
            newState.mask = "9999-999999-99999";
        }
        this.setState(newState);
    };

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Phone Numbers</CardTitle>
                                <InputGroup className="mb-3">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <InputMask inputRef={this.ref} className="form-control" mask="+1 (999) 999-9999" maskChar={null} />
                                </InputGroup>
                                <InputGroup>
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <InputMask className="form-control" mask="+1 999-999-9999" maskChar={null} />
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Dates</CardTitle>
                                <InputGroup className="mb-3">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                    </div>
                                    <InputMask className="form-control" mask="99-99-9999" defaultValue="06-09-2025" />
                                </InputGroup>
                                <InputGroup>
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                    </div>
                                    <InputMask className="form-control" mask="99/99/9999" placeholder="Enter birthdate" />
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Credit Card</CardTitle>
                                <InputGroup>
                                    <div className="input-group-text">@</div>
                                    <InputMask className="form-control" {...this.state} onChange={this.onChange} />
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default FormInputMaskExample;
