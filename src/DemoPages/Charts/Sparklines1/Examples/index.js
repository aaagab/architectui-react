import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesCurve, SparklinesReferenceLine, SparklinesSpots } from "react-sparklines";
function boxMullerRandom() {
    let phase = true, x1, x2, w;
    return (function () {
        if (phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);
            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        }
        else {
            return x2 * w;
        }
    })();
}
function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}
const sampleData = randomData(30);
const sampleData1 = randomData(39);
const sampleData2 = randomData(19);
const sampleData3 = randomData(43);
const sampleData4 = randomData(13);
const sampleData5 = randomData(17);
const sampleData6 = randomData(24);
const sampleData7 = randomData(35);
const sampleData100 = randomData(100);
const ChartsSparklines1 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(data.concat([boxMullerRandom()]));
        }, 200);
        return () => {
            clearInterval(intervalId);
        };
    }, [data]);
    return (_jsx(Fragment, { children: _jsx(TransitionGroup, { children: _jsx(CSSTransition, { nodeRef: useRef(), component: "div", classNames: "TabsAnimation", appear: true, timeout: 1500, enter: false, exit: false, children: _jsxs(Row, { children: [_jsxs(Col, { md: "3", children: [_jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Simple" }), _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesLine, {}) })] }) }), _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Simple curved" }), _jsx(Sparklines, { height: 90, data: sampleData1, children: _jsx(SparklinesCurve, {}) })] }) }), _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Dynamic Sparklines" }), _jsx("div", { className: "mb-2", children: _jsxs(Sparklines, { data: data, limit: 20, children: [_jsx(SparklinesLine, { color: "#1c8cdc" }), _jsx(SparklinesSpots, {})] }) }), _jsx("div", { className: "mb-2", children: _jsxs(Sparklines, { data: data, limit: 20, children: [_jsx(SparklinesBars, { style: {
                                                                fill: "#41c3f9",
                                                                fillOpacity: ".25",
                                                            } }), _jsx(SparklinesLine, { style: {
                                                                stroke: "#41c3f9",
                                                                fill: "none",
                                                            } })] }) }), _jsx("div", { className: "mb-2", children: _jsx(Sparklines, { data: data, limit: 20, children: _jsx(SparklinesLine, { style: {
                                                            stroke: "none",
                                                            fill: "#8e44af",
                                                            fillOpacity: "1",
                                                        } }) }) }), _jsx(Sparklines, { data: data, limit: 10, children: _jsx(SparklinesBars, { color: "#0a83d8" }) })] }) })] }), _jsxs(Col, { md: "6", children: [_jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Normal Band" }), _jsxs(Row, { children: [_jsx(Col, { md: "6", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesLine, { height: "30", style: {
                                                                    fill: "none",
                                                                } }) }) }), _jsx(Col, { md: "6", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, { height: "30", style: {
                                                                        fill: "none",
                                                                    } }), _jsx(SparklinesReferenceLine, { height: "30", type: "mean" })] }) })] })] }) }), _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Customizable" }), _jsxs(Row, { children: [_jsxs(Col, { md: "4", children: [_jsx("div", { className: "mb-2", children: _jsx(Sparklines, { height: 90, data: sampleData2, children: _jsx(SparklinesLine, { color: "#1c8cdc" }) }) }), _jsx(Sparklines, { height: 90, data: sampleData3, children: _jsx(SparklinesLine, { color: "#fa7e17" }) })] }), _jsxs(Col, { md: "4", children: [_jsx("div", { className: "mb-2", children: _jsx(Sparklines, { height: 90, data: sampleData4, children: _jsx(SparklinesLine, { color: "#ea485c" }) }) }), _jsx(Sparklines, { height: 90, data: sampleData5, children: _jsx(SparklinesLine, { color: "#56b45d" }) })] }), _jsxs(Col, { md: "4", children: [_jsx("div", { className: "mb-2", children: _jsx(Sparklines, { height: 90, data: sampleData6, children: _jsx(SparklinesLine, { color: "#253e56" }) }) }), _jsx(Sparklines, { height: 90, data: sampleData7, children: _jsx(SparklinesLine, { color: "#8e44af" }) })] })] })] }) }), _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Spots" }), _jsxs(Row, { children: [_jsx(Col, { md: "4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, { style: {
                                                                        fill: "none",
                                                                    } }), _jsx(SparklinesSpots, {})] }) }), _jsx(Col, { md: "4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, { color: "#56b45d" }), _jsx(SparklinesSpots, { style: {
                                                                        fill: "#56b45d",
                                                                    } })] }) }), _jsx(Col, { md: "4", children: _jsxs(Sparklines, { height: 90, data: sampleData, margin: 6, children: [_jsx(SparklinesLine, { style: {
                                                                        strokeWidth: 3,
                                                                        stroke: "#336aff",
                                                                        fill: "none",
                                                                    } }), _jsx(SparklinesSpots, { size: 4, style: {
                                                                        stroke: "#336aff",
                                                                        strokeWidth: 3,
                                                                        fill: "white",
                                                                    } })] }) })] })] }) }), _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Bars & Bounds" }), _jsxs(Row, { children: [_jsx(Col, { md: "4", children: _jsx(Sparklines, { height: 90, data: sampleData, max: 0.5, children: _jsx(SparklinesLine, {}) }) }), _jsx(Col, { md: "4", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesBars, { style: {
                                                                    fill: "#41c3f9",
                                                                } }) }) }), _jsx(Col, { md: "4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesBars, { style: {
                                                                        stroke: "white",
                                                                        fill: "#41c3f9",
                                                                        fillOpacity: ".25",
                                                                    } }), _jsx(SparklinesLine, { style: {
                                                                        stroke: "#41c3f9",
                                                                        fill: "none",
                                                                    } })] }) })] })] }) })] }), _jsx(Col, { md: "3", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Reference Line" }), _jsx("div", { className: "mb-4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, {}), _jsx(SparklinesReferenceLine, { type: "max" })] }) }), _jsx("div", { className: "mb-4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, {}), _jsx(SparklinesReferenceLine, { type: "min" })] }) }), _jsx("div", { className: "mb-4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, {}), _jsx(SparklinesReferenceLine, { type: "mean" })] }) }), _jsx("div", { className: "mb-4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, {}), _jsx(SparklinesReferenceLine, { type: "avg" })] }) }), _jsx("div", { className: "mb-4", children: _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesLine, {}), _jsx(SparklinesReferenceLine, { type: "median" })] }) }), _jsxs(Sparklines, { height: 90, data: sampleData, children: [_jsx(SparklinesBars, { style: {
                                                        fill: "slategray",
                                                        fillOpacity: ".5",
                                                    } }), _jsx(SparklinesReferenceLine, {})] })] }) }) }), _jsx(Col, { md: "12", children: _jsx(Card, { className: "main-card mb-3", children: _jsxs(CardBody, { children: [_jsx(CardTitle, { children: "Other Examples" }), _jsxs(Row, { children: [_jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesLine, { style: {
                                                                    strokeWidth: 3,
                                                                    stroke: "#336aff",
                                                                    fill: "none",
                                                                } }) }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsxs(Sparklines, { height: 90, data: sampleData100, width: 200, children: [_jsx(SparklinesLine, { style: {
                                                                        stroke: "#2991c8",
                                                                        fill: "none",
                                                                    } }), _jsx(SparklinesSpots, {})] }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsxs(Sparklines, { height: 90, data: sampleData100, children: [_jsx(SparklinesLine, { style: {
                                                                        stroke: "black",
                                                                        fill: "none",
                                                                    } }), _jsx(SparklinesSpots, { style: {
                                                                        fill: "orange",
                                                                    } })] }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesBars, { style: {
                                                                    stroke: "white",
                                                                    strokeWidth: "1",
                                                                    fill: "#40c0f5",
                                                                } }) }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesLine, { style: {
                                                                    stroke: "#8ed53f",
                                                                    strokeWidth: "1",
                                                                    fill: "none",
                                                                } }) }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesLine, { style: {
                                                                    stroke: "#d1192e",
                                                                    strokeWidth: "1",
                                                                    fill: "none",
                                                                } }) }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsx(Sparklines, { height: 90, data: sampleData, children: _jsx(SparklinesLine, { style: {
                                                                    stroke: "#559500",
                                                                    fill: "#8fc638",
                                                                    fillOpacity: "1",
                                                                } }) }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-3", children: _jsx(Sparklines, { height: 90, data: sampleData, style: {
                                                                background: "#272727",
                                                            }, margin: 10, children: _jsx(SparklinesLine, { style: {
                                                                    stroke: "none",
                                                                    fill: "#d2673a",
                                                                    fillOpacity: ".5",
                                                                } }) }) }) }), _jsx(Col, { md: "3", children: _jsx("div", { className: "mb-1", children: _jsxs(Sparklines, { height: 90, data: sampleData, style: {
                                                                background: "#00bdcc",
                                                            }, margin: 10, children: [_jsx(SparklinesLine, { style: {
                                                                        stroke: "white",
                                                                        fill: "none",
                                                                    } }), _jsx(SparklinesReferenceLine, { style: {
                                                                        stroke: "white",
                                                                        strokeOpacity: 0.75,
                                                                        strokeDasharray: "2, 2",
                                                                    } })] }) }) })] })] }) }) })] }) }) }) }));
};
export default ChartsSparklines1;
