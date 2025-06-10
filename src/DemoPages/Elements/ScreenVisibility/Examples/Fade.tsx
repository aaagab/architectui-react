import { Fragment, useEffect, useState } from "react";

import cx from "classnames";

import VisibilitySensor from "../../../../dev/react-visibility-sensor/visibility-sensor";

import { ListGroup } from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const FadeVisibility = () => {
    const [getElement, setGetElement] = useState<HTMLElement | null>(null);
    const [containmentDOMRect, setContainmentDOMRect] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setGetElement(document.getElementById("sample"));
    }, [])

    useEffect(() => {
        if (getElement) {
            setContainmentDOMRect(getElement);
        } else {
            setContainmentDOMRect(null);
        }
    }, [getElement])

    return (
        <Fragment>
            <div id="sample" className="scroll-area-md">
                <PerfectScrollbar>
                    <ListGroup flush>
                        {lists.map((list) => (
                            <VisibilitySensor key={list} containment={containmentDOMRect}
                                scrollDelay={1000}
                            >
                                {({ nodeRef, isVisible }) => (<>
                                    <li
                                        ref={nodeRef}
                                        className={cx("animated", {
                                            fadeIn: isVisible,
                                            fadeOut: !isVisible,
                                        })}
                                        style={{
                                            background: isVisible ? "transparent" : "#f65ca2",
                                            border: "1px solid rgba(0, 0, 0, 0.125)",
                                            fontSize: "3em",
                                            paddingLeft: "20px"
                                        }}
                                    >
                                        I am #{list}
                                    </li>
                                </>)}
                            </VisibilitySensor>
                        ))}
                    </ListGroup>
                </PerfectScrollbar>
            </div>
        </Fragment>
    );
}

export default FadeVisibility;
