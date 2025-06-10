/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import { useContext } from "react";
import classnames from "classnames";
import Item from "../containers/Item.ts";
import { Context } from "./MetisMenu.tsx";

const Container = (
    {
        items = [],
        visible = false,
        itemId,
        reduxStoreName,
        reduxUid
    }: {
        items: Array<any>,
        visible: boolean,
        itemId: number | string,
        reduxStoreName: string,
        reduxUid: number,

    }
) => {
    const { classStore } = useContext(Context);
    return (
        <>
            <ul
                className={classnames(
                    typeof classStore.classContainer === "function"
                        ? classStore.classContainer({ itemId, visible, items })
                        : classStore.classContainer,
                    visible && classStore.classContainerVisible
                )}
            >
                {items.map((item, i) => (
                    <Item
                        key={item.id || `_${i}`}
                        reduxStoreName={reduxStoreName}
                        reduxUid={reduxUid}
                        {...item}
                    />
                ))}
            </ul>
        </>
    );
};

export default Container;
