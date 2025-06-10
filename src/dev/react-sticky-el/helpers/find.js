// @flow strict
const basicSelectors = {};
if (typeof document !== 'undefined') {
    basicSelectors.body = document.body;
    basicSelectors.window = window;
    basicSelectors.document = document;
}
const matchesMethodName = (() => {
    if (typeof document !== 'undefined' && document.body) {
        const body = document.body;
        return typeof (body.matches) === 'function' ? 'matches' :
            typeof (body.webkitMatchesSelector) === 'function' ? 'webkitMatchesSelector' : //webkit
                // @ts-expect-error - ts doesn't like vendors, so do I, but we have to support such case
                typeof (body.mozMatchesSelector) === 'function' ? 'mozMatchesSelector' : //mozilla
                    // @ts-expect-error - ts doesn't like vendors, so do I, but we have to support such case
                    typeof (body.msMatchesSelector) === 'function' ? 'msMatchesSelector' : //ie
                        // @ts-expect-error - ts doesn't like vendors, so do I, but we have to support such case
                        typeof (body.oMatchesSelector) === 'function' ? 'oMatchesSelector' : //old opera
                            null;
    }
    return null;
})();
export default function find(selector, el) {
    if (!selector) {
        return null;
    }
    // eslint-disable-next-line no-prototype-builtins
    if (basicSelectors.hasOwnProperty(selector)) {
        return basicSelectors[selector];
    }
    // select by id
    if (selector[0] === '#') {
        return document.getElementById(selector.slice(1));
    }
    if (matchesMethodName === null) {
        return null;
    }
    let temp = el;
    // eslint-disable-next-line no-cond-assign
    while (temp = temp.parentElement) {
        // @ts-ignore
        if (temp[matchesMethodName](selector)) {
            return temp || null;
        }
    }
    // nothing has been found :(
    return null;
}
