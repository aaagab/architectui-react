/**
 * src/components/MetisMenu.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

/* eslint react/forbid-prop-types: [ "error", { forbid: [ "any", "array" ] } ] */

import { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import classnames from "classnames";
import Ajax from "simple-ajax";
import Container from "../containers/Container.ts";
import Link from "./DefaultLink";
import internalReducers from "../reducers/internal";
import {
    updateContent,
    changeActiveLinkId,
    changeActiveLinkTo,
    changeActiveLinkLabel,
    changeActiveLinkFromLocation,
} from "../actions/content";
import { updateListener } from "../actions/emitters";

import { configureStore } from '@reduxjs/toolkit';

let lastReduxUid = -1;


export const Context = createContext({
    classStore: {
        classItem: {},
        classItemActive: "",
        classContainer: {},
        classContainerVisible: {},
        classItemHasActiveChild: {},
        classItemHasVisibleChild: {},
        classLink: {},
        classLinkActive: {},
        classLinkHasActiveChild: {},
        classIcon: {},
        iconNamePrefix: "",
        classStateIcon: {},
        iconNameStateVisible: {},
        iconNameStateHidden: {},
    },
    LinkComponent: {} as Link,
});

const store = configureStore({
    reducer: internalReducers,
})


const MetisMenu = ({
    content = [],
    ajax,
    LinkComponent = Link,
    noBuiltInClassNames = false,
    className,
    classNameContainer,
    classNameContainerVisible,
    classNameItem,
    classNameItemActive = "",
    classNameItemHasActiveChild = "",
    classNameItemHasVisibleChild = "",
    classNameLink = "",
    classNameLinkActive = "",
    classNameLinkHasActiveChild = "",
    classNameIcon,
    classNameStateIcon,
    iconNamePrefix = "fa fa-",
    iconNameStateHidden = "caret-left",
    iconNameStateVisible = "caret-left rotate-minus-90",
    activeLinkId,
    activeLinkTo,
    activeLinkLabel,
    activeLinkFromLocation = false,
    onSelected,
    reduxStoreName = "metisMenuStore",
}: {
    content: Array<object>,
    ajax?: object | string,
    LinkComponent: Link | (() => void),
    noBuiltInClassNames: boolean,
    className?: string,
    classNameContainer?: (() => void) | string,
    classNameContainerVisible?: string,
    classNameItem?: string,
    classNameItemActive: string,
    classNameItemHasActiveChild: string,
    classNameItemHasVisibleChild?: string,
    classNameLink: string,
    classNameLinkActive: string,
    classNameLinkHasActiveChild: string,
    classNameIcon: string,
    classNameStateIcon: string,
    iconNamePrefix: string,
    iconNameStateHidden: string,
    iconNameStateVisible: string,
    activeLinkId?: number,
    activeLinkTo?: string,
    activeLinkLabel?: string,
    activeLinkFromLocation: boolean,

    onSelected?: () => void,
    reduxStoreName: string,
}) => {
    lastReduxUid += 1;
    // @ts-ignore
    const [reduxUid, setReduxUid] = useState<number>(lastReduxUid);

    function updateActiveLink() {
        if (activeLinkId)
            store.dispatch(changeActiveLinkId(reduxUid, activeLinkId));
        else if (activeLinkTo)
            store.dispatch(changeActiveLinkTo(reduxUid, activeLinkTo));
        else if (activeLinkLabel)
            store.dispatch(changeActiveLinkLabel(reduxUid, activeLinkLabel));
        else if (activeLinkFromLocation)
            store.dispatch(changeActiveLinkFromLocation(reduxUid));
    }

    function updateRemoteContent(ajax) {
        const tmAjax = new Ajax(ajax);
        tmAjax.on("success", (event) => {
            let content;
            const {
                target: { responseText },
            } = event.target.responseText;
            try {
                content = JSON.parse(responseText);
            } catch (e) {
                throw new Error(
                    `MetisMenu: Ajax response expected to be json, but got; ${responseText}`
                );
            }
            store.dispatch(updateContent(reduxUid, content));
            updateActiveLink();
        });
        tmAjax.send();
    }

    const classStore = {
        classMainWrapper: classnames(
            { metismenu: !noBuiltInClassNames },
            className
        ),
        classContainer:
            typeof classNameContainer === "function"
                ? classNameContainer
                : classnames(
                    { "metismenu-container": !noBuiltInClassNames },
                    classNameContainer
                ),
        classContainerVisible: classnames(
            { visible: !noBuiltInClassNames },
            classNameContainerVisible
        ),
        classItem: classnames(
            { "metismenu-item": !noBuiltInClassNames },
            classNameItem
        ),
        classLink: classnames(
            { "metismenu-link": !noBuiltInClassNames },
            classNameLink
        ),
        classItemActive: classNameItemActive,
        classItemHasActiveChild: classNameItemHasActiveChild,
        classItemHasVisibleChild: classNameItemHasVisibleChild,
        classLinkActive: classnames(
            { active: !noBuiltInClassNames },
            classNameLinkActive
        ),
        classLinkHasActiveChild: classnames(
            { "has-active-child": !noBuiltInClassNames },
            classNameLinkHasActiveChild
        ),
        classIcon: classnames(
            { "metismenu-icon": !noBuiltInClassNames },
            classNameIcon
        ),
        classStateIcon: classnames(
            { "metismenu-state-icon": !noBuiltInClassNames },
            classNameStateIcon
        ),

        iconNamePrefix: iconNamePrefix,
        iconNameStateHidden: iconNameStateHidden,
        iconNameStateVisible: iconNameStateVisible,
    };

    useEffect(() => {
        updateActiveLink();
    }, [])

    useEffect(() => {
        if (ajax) {
            updateRemoteContent(ajax);
        } else if (activeLinkId || activeLinkTo || activeLinkLabel || activeLinkFromLocation) {
            updateActiveLink();
        }
    }, [ajax])

    useEffect(() => {
        if (onSelected) {
            store.dispatch(updateListener(reduxUid, onSelected));
        }
    }, [onSelected])

    useEffect(() => {
        if (content) {
            store.dispatch(updateContent(reduxUid, content));
        }
    }, [content])

    return (
        <>
            <Context.Provider value={{ classStore: classStore, LinkComponent: LinkComponent }}>
                <Provider store={store}>
                    <div className={classStore.classMainWrapper}>
                        <Container
                            reduxStoreName={reduxStoreName}
                            reduxUid={reduxUid}
                        />
                    </div>
                </Provider>
            </Context.Provider>
        </>
    );
}

export default MetisMenu;
