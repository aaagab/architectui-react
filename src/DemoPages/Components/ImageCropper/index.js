import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import Cropper, {} from "react-cropper";
import "cropperjs/dist/cropper.css";
import PageTitle from "../../../Layout/AppMain/PageTitle";
import DemoImg from "../../../assets/utils/images/originals/fence-small.jpg";
const ImageCropExample = () => {
    const cssRef = useRef(null);
    const cropperRef1 = useRef(null);
    const [cropResult1, setCropResult1] = useState(null);
    const cropperRef2 = useRef(null);
    const [cropResult2, setCropResult2] = useState(null);
    const onCrop = (cropperRef, setCropResult) => {
        cropperRef.current?.cropper.getCroppedCanvas().toBlob((blob) => {
            if (blob !== null) {
                setCropResult(URL.createObjectURL(blob));
            }
        });
    };
    return (_jsxs(Fragment, { children: [_jsx(PageTitle, { heading: "Image Crop", subheading: "You can easily crop and edit images with this React plugin.", icon: "pe-7s-signal icon-gradient bg-malibu-beach" }), _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: cssRef, component: "div", classNames: "TabsAnimation", appear: true, timeout: 1500, enter: false, exit: false, children: _jsxs(Row, { children: [_jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Basic" }), _jsx(Cropper, { ref: cropperRef1, src: DemoImg, style: {
                                                    height: 400,
                                                    width: "100%",
                                                }, guides: false }), _jsx("div", { className: "divider" }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-center", children: _jsx(Button, { color: "primary", onClick: () => onCrop(cropperRef1, setCropResult1), children: "Crop Selection" }) }), cropResult1 ? (_jsxs("div", { children: [_jsx("div", { className: "divider" }), _jsx("div", { children: _jsx("h6", { children: "Cropped Result" }) }), _jsx("img", { className: "after-img rounded", src: cropResult1, alt: "" })] })) : null] })] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Predefined Aspect Ratio" }), _jsx(Cropper, { ref: cropperRef2, src: DemoImg, style: {
                                                    height: 400,
                                                    width: "100%",
                                                }, aspectRatio: 16 / 9, guides: false }), _jsx("div", { className: "divider" }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-center", children: _jsx(Button, { color: "primary", onClick: () => onCrop(cropperRef2, setCropResult2), children: "Crop Selection" }) }), cropResult2 ? (_jsxs("div", { children: [_jsx("div", { className: "divider" }), _jsx("div", { children: _jsx("h6", { children: "Cropped Result" }) }), _jsx("img", { className: "after-img rounded", src: cropResult2, alt: "" })] })) : null] })] }) }) })] }) }) })] }));
};
export default ImageCropExample;
