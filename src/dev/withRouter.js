import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
const withRouter = WrappedComponent => props => {
    const params = useParams();
    // ...other hooks
    return (_jsx(WrappedComponent, { ...props, params }));
};
export default withRouter;
