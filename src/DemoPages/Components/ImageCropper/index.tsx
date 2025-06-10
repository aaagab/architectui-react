import { Fragment, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import Cropper, { type ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import DemoImg from "../../../assets/utils/images/originals/fence-small.jpg";

const ImageCropExample = () => {
    const cssRef = useRef(null);
    const cropperRef1 = useRef<ReactCropperElement>(null);
    const [cropResult1, setCropResult1] = useState<string | null>(null);
    const cropperRef2 = useRef<ReactCropperElement>(null);
    const [cropResult2, setCropResult2] = useState<string | null>(null);

    const onCrop = (cropperRef, setCropResult) => {
        cropperRef.current?.cropper.getCroppedCanvas().toBlob((blob) => {
            if (blob !== null) {
                setCropResult(URL.createObjectURL(blob))
            }
        });
    };

    return (
        <Fragment>
            <PageTitle
                heading="Image Crop"
                subheading="You can easily crop and edit images with this React plugin."
                icon="pe-7s-signal icon-gradient bg-malibu-beach"
            />
            <TransitionGroup>
                <CSSTransition nodeRef={cssRef} component="div" classNames="TabsAnimation" appear={true} timeout={1500} enter={false} exit={false}>
                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Basic</CardTitle>
                                    <Cropper
                                        ref={cropperRef1}
                                        src={DemoImg}
                                        style={{
                                            height: 400,
                                            width: "100%",
                                        }}
                                        guides={false}
                                    // crop={onCrop}
                                    />
                                    <div className="divider" />
                                    <div className="text-center">
                                        <div className="text-center">
                                            <Button color="primary" onClick={() => onCrop(cropperRef1, setCropResult1)}>
                                                Crop Selection
                                            </Button>
                                        </div>
                                        {cropResult1 ? (
                                            <div>
                                                <div className="divider" />
                                                <div>
                                                    <h6>Cropped Result</h6>
                                                </div>
                                                <img className="after-img rounded" src={cropResult1} alt="" />
                                            </div>
                                        ) : null}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Predefined Aspect Ratio</CardTitle>
                                    <Cropper
                                        ref={cropperRef2}
                                        src={DemoImg}
                                        style={{
                                            height: 400,
                                            width: "100%",
                                        }}
                                        aspectRatio={16 / 9}
                                        guides={false}
                                    // crop={}
                                    />
                                    <div className="divider" />
                                    <div className="text-center">
                                        <div className="text-center">
                                            <Button color="primary" onClick={() => onCrop(cropperRef2, setCropResult2)}>
                                                Crop Selection
                                            </Button>
                                        </div>
                                        {cropResult2 ? (
                                            <div>
                                                <div className="divider" />
                                                <div>
                                                    <h6>Cropped Result</h6>
                                                </div>
                                                <img className="after-img rounded" src={cropResult2} alt="" />
                                            </div>
                                        ) : null}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
}

export default ImageCropExample;
