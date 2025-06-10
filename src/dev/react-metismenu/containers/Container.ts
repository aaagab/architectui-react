/**
 * src/containers/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import { connect } from "react-redux";
import Container from "../components/Container.tsx";

const mapStateToProps = (store, ownProps) => {
    const items = store[ownProps.reduxStoreName].content[
        ownProps.reduxUid
    ]?.filter((item) => item.parentId === ownProps.itemId);

    return {
        items,
    };
};

export default connect(mapStateToProps)(Container);
