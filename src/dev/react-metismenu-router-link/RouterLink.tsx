/**
 * src/RouterLink.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 08.09.2016
 * Refactored by Gabriel Auger For React Router v7 and TypeScript on 06/03/2025
 */

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useLocation } from 'react-router-dom';

function MyRouterLink({
    className,
    classNameActive,
    classNameHasActiveChild,
    active,
    hasActiveChild,
    to,
    externalLink,
    hasSubMenu,
    toggleSubMenu,
    activateMe,
    children,
}: {
    className: string,
    classNameActive: string,
    classNameHasActiveChild: string,
    active: boolean,
    hasActiveChild: boolean,
    to: string,
    externalLink: boolean,
    hasSubMenu: boolean,
    toggleSubMenu?: () => void,
    activateMe: () => void,
    children: React.ReactElement | Array<any>,
}) {
    const location = useLocation();
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if ((location.pathname || "/") === to) {
            // isactive
            if (ref.current) {
                ref.current.classList.add(classNameActive);
            }
            var root = ref.current?.parentElement?.parentElement?.parentElement;
            if (root) {
                var a = root.firstElementChild;
                if (a?.tagName === "A" && a.classList.contains("metismenu-link")) {
                    a.classList.add(classNameHasActiveChild);
                }
                var ul = root.lastElementChild;
                if (ul?.tagName === "UL" && ul.classList.contains("metismenu-container")) {
                    if (ul.classList.contains("visible") === false) {
                        ul.classList.add("visible");
                    }
                }
            }
        }

    }, [location])
    return hasSubMenu || externalLink ? (
        <a
            key={location.pathname}
            ref={ref}
            className={classnames(className)}
            target={externalLink ? "_blank" : undefined}
            href={to}
            onClick={toggleSubMenu}
        >
            {children}
        </a>
    ) : (
        <Link
            key={location.pathname}
            ref={ref}
            className={classnames(className)}
            to={to}
        >
            {children}
        </Link>
    );
}

export default MyRouterLink;
