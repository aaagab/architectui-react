import { jsx as _jsx } from "react/jsx-runtime";
import StickyRenderProp from './render-props-version';
export const defaultProps = {
    ...StickyRenderProp.defaultProps,
    stickyClassName: 'sticky',
    wrapperClassName: '',
    stickyStyle: {},
};
function Sticky(props) {
    const { 
    // props for StickyRenderProp
    mode, onFixedToggle, hideOnBoundaryHit, offsetTransforms, disabled, boundaryElement, scrollElement, bottomOffset, topOffset, positionRecheckInterval, children, isIOSFixEnabled, dontUpdateHolderHeightWhenSticky, 
    // own props
    wrapperClassName, stickyClassName, stickyStyle, 
    // rest of the props that we will forward to wrapper
    ...rest } = {
        ...defaultProps,
        ...props
    };
    return _jsx(StickyRenderProp, { mode: mode, onFixedToggle: onFixedToggle, hideOnBoundaryHit: hideOnBoundaryHit, offsetTransforms: offsetTransforms, disabled: disabled, boundaryElement: boundaryElement, scrollElement: scrollElement, bottomOffset: bottomOffset, topOffset: topOffset, positionRecheckInterval: positionRecheckInterval, isIOSFixEnabled: isIOSFixEnabled, dontUpdateHolderHeightWhenSticky: dontUpdateHolderHeightWhenSticky, children: ({ isFixed, wrapperStyles, wrapperRef, holderStyles, holderRef }) => (_jsx("div", { ...rest, ref: holderRef, style: holderStyles, children: _jsx("div", { ...rest, className: `${wrapperClassName} ${isFixed ? stickyClassName : ''}`, style: isFixed ? { ...wrapperStyles, ...stickyStyle } : wrapperStyles, ref: wrapperRef, children: children }) })) });
}
export default Sticky;
