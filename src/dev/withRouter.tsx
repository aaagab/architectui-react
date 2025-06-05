import { useParams } from 'react-router-dom';
import React from "react";


const withRouter = WrappedComponent => props => {
    const params = useParams();
    // ...other hooks

    return (
        <WrappedComponent
            {...props}
            {...{ params, /* other hook props */ }}
        />
    );
};

export default withRouter;