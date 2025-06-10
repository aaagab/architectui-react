import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LineExample from "../line";
import LineExample2 from "../line2";
import BarExample from "../bar";
import HorizontalBarExample from "../horizontalBar";
import MixExample from "../mix";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";
const ChartJsLinesBars = () => {
    return (_jsx(Fragment, { children: _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: useRef(), component: "div", classNames: "TabsAnimation", appear: true, timeout: 0, enter: false, exit: false, children: _jsx(Container, { fluid: true, children: _jsxs(Row, { children: [_jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Line Chart" }), _jsx(LineExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Animated Line Chart" }), _jsx(MixExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Area Chart" }), _jsx(LineExample2, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Bar Chart" }), _jsx(BarExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Horizontal Bar Chart" }), _jsx(HorizontalBarExample, {})] }) }) })] }) }) }) }) }));
};
export default ChartJsLinesBars;
