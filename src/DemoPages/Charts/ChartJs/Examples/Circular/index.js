import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DoughnutExample from "../doughnut";
import PieExample from "../pie";
import DynamicDoughnutExample from "../dynamicDoughnut";
import RadarExample from "../radar";
import PolarExample from "../polar";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";
const ChartJsCircular = () => {
    return (_jsx(Fragment, { children: _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: useRef(), component: "div", classNames: "TabsAnimation", appear: true, timeout: 0, enter: false, exit: false, children: _jsx(Container, { fluid: true, children: _jsxs(Row, { children: [_jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Doughnut" }), _jsx(DoughnutExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Dynamic Doughnut Chart" }), _jsx(DynamicDoughnutExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Radar Chart" }), _jsx(RadarExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Polar Chart" }), _jsx(PolarExample, {})] }) }) }), _jsx(Col, { lg: "6", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Pie Chart" }), _jsx(PieExample, {})] }) }) })] }) }) }) }) }));
};
export default ChartJsCircular;
