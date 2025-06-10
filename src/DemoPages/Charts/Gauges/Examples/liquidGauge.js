import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import { Fragment, useRef, useState } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const ChartsLiquidGaugeExample = () => {
    const [value, setValue] = useState(50);
    const startColor = "#6495ed"; // cornflowerblue
    const endColor = "#dc143c"; // crimson
    const radius = 80;
    const interpolate = interpolateRgb(startColor, endColor);
    const fillColor = interpolate(value / 100);
    const gradientStops = [
        {
            key: "0%",
            stopColor: color(fillColor)?.darker(0.5).toString(),
            stopOpacity: 1,
            offset: "0%",
        },
        {
            key: "50%",
            stopColor: fillColor,
            stopOpacity: 0.75,
            offset: "50%",
        },
        {
            key: "100%",
            stopColor: color(fillColor)?.brighter(0.5).toString(),
            stopOpacity: 0.5,
            offset: "100%",
        },
    ];
    return (_jsx(Fragment, { children: _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: useRef(), component: "div", classNames: "TabsAnimation", appear: true, timeout: 1500, enter: false, exit: false, children: _jsx(Row, { children: _jsx(Col, { md: "12", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Liquid Gauges" }), _jsxs(Row, { className: "text-center", children: [_jsx(Col, { md: "6", lg: "4", children: _jsx(LiquidFillGauge, { style: { margin: "0 auto" }, width: radius, height: radius, value: value, percent: "", textSize: 1, textOffsetX: 0, textOffsetY: 0, textRenderer: (props) => {
                                                        const value = Math.round(props.value);
                                                        const radius = Math.min(props.height / 2, props.width / 2);
                                                        const textPixels = (props.textSize * radius) / 2;
                                                        const valueStyle = {
                                                            fontSize: textPixels,
                                                        };
                                                        const percentStyle = {
                                                            fontSize: textPixels * 0.6,
                                                        };
                                                        return (_jsxs("tspan", { children: [_jsx("tspan", { className: "value", style: valueStyle, children: value }), _jsx("tspan", { style: percentStyle, children: props.percent })] }));
                                                    }, riseAnimation: true, waveAnimation: true, waveFrequency: 5, waveAmplitude: 3, gradient: true, gradientStops: gradientStops, circleStyle: {
                                                        fill: fillColor,
                                                    }, waveStyle: {
                                                        fill: fillColor,
                                                    }, textStyle: {
                                                        fill: color("#989fa4")?.toString(),
                                                    }, waveTextStyle: {
                                                        fill: color("#fff")?.toString(),
                                                    }, onClick: () => {
                                                        setValue(Math.random() * 100);
                                                    } }) }), _jsx(Col, { md: "6", lg: "4", children: _jsx(LiquidFillGauge, { style: { margin: "0 auto" }, width: radius * 1.5, height: radius * 1.5, value: value, percent: "", textSize: 1, textOffsetX: 0, textOffsetY: 0, textRenderer: (props) => {
                                                        const value = Math.round(props.value);
                                                        const radius = Math.min(props.height / 2, props.width / 2);
                                                        const textPixels = (props.textSize * radius) / 2;
                                                        const valueStyle = {
                                                            fontSize: textPixels,
                                                        };
                                                        const percentStyle = {
                                                            fontSize: textPixels * 0.6,
                                                        };
                                                        return (_jsxs("tspan", { children: [_jsx("tspan", { className: "value", style: valueStyle, children: value }), _jsx("tspan", { style: percentStyle, children: props.percent })] }));
                                                    }, riseAnimation: true, waveAnimation: true, waveFrequency: 3, waveAmplitude: 4, gradient: true, gradientStops: gradientStops, circleStyle: {
                                                        fill: fillColor,
                                                    }, waveStyle: {
                                                        fill: fillColor,
                                                    }, textStyle: {
                                                        fill: color("#989fa4")?.toString(),
                                                    }, waveTextStyle: {
                                                        fill: color("#fff")?.toString(),
                                                    }, onClick: () => {
                                                        setValue(Math.random() * 100);
                                                    } }) }), _jsx(Col, { md: "6", lg: "4", children: _jsx(LiquidFillGauge, { style: { margin: "0 auto" }, width: radius * 2, height: radius * 2, value: value, percent: "%", textSize: 1, textOffsetX: 0, textOffsetY: 0, textRenderer: (props) => {
                                                        const value = Math.round(props.value);
                                                        const radius = Math.min(props.height / 2, props.width / 2);
                                                        const textPixels = (props.textSize * radius) / 2;
                                                        const valueStyle = {
                                                            fontSize: textPixels,
                                                        };
                                                        const percentStyle = {
                                                            fontSize: textPixels * 0.6,
                                                        };
                                                        return (_jsxs("tspan", { children: [_jsx("tspan", { className: "value", style: valueStyle, children: value }), _jsx("tspan", { style: percentStyle, children: props.percent })] }));
                                                    }, riseAnimation: true, waveAnimation: true, waveFrequency: 3, waveAmplitude: 2, gradient: true, gradientStops: gradientStops, circleStyle: {
                                                        fill: fillColor,
                                                    }, waveStyle: {
                                                        fill: fillColor,
                                                    }, textStyle: {
                                                        fill: color("#989fa4")?.toString(),
                                                    }, waveTextStyle: {
                                                        fill: color("#fff")?.toString(),
                                                    }, onClick: () => {
                                                        setValue(Math.random() * 100);
                                                    } }) })] }), _jsx("div", { className: "divider" }), _jsx("div", { className: "text-center", children: _jsx(Button, { type: "button", color: "primary", className: "btn-wide btn-shadow btn-pill", onClick: () => {
                                                setValue(Math.random() * 100);
                                            }, children: "Refresh" }) })] }) }) }) }) }) }) }));
};
export default ChartsLiquidGaugeExample;
