import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route } from "react-router-dom";
import CustomSuspense from "../../dev/customSuspense";
import { lazy } from "react";
// Forms
const FormElementsLayouts = lazy(() => import("./Elements/Layouts/"));
const FormElementsControls = lazy(() => import("./Elements/Controls/"));
const FormElementsValidation = lazy(() => import("./Elements/Validation/"));
const FormWizardVar1 = lazy(() => import("./Elements/Wizard/Examples/Variation1"));
const FormWizardVar2 = lazy(() => import("./Elements/Wizard/Examples/Variation2"));
const FormWizardVar3 = lazy(() => import("./Elements/Wizard/Examples/Variation3"));
const FormElementsSticky = lazy(() => import("./Elements/StickyHeaders/"));
const FormDatePicker = lazy(() => import("./Components/DatePicker/"));
const FormRangeSlider = lazy(() => import("./Components/RangeSlider/"));
const FormWysiwygEditor = lazy(() => import("./Components/WysiwygEditor/"));
const FormToggleSwitch = lazy(() => import("./Components/ToggleSwitch/"));
const FormMultiSelect = lazy(() => import("./Components/MultiSelect/"));
const FormDropdown = lazy(() => import("./Components/Dropdown/"));
const FormInputMask = lazy(() => import("./Components/InputMask/"));
const FormDropZone = lazy(() => import("./Components/DropZone/"));
const FormTypeahead = lazy(() => import("./Components/Typeahead/"));
const FormClipboard = lazy(() => import("./Components/Clipboard/"));
const FormTextareaAutosize = lazy(() => import("./Components/TextareaAutosize/"));
const FormsNumberPickerExamples = lazy(() => import("./Components/NumberPicker/"));
const FormColorPicker = lazy(() => import("./Components/ColorPicker/"));
export const FormsRoutes = () => {
    return (_jsxs(Route, { path: "forms", element: _jsx(CustomSuspense, { text: "Forms" }), children: [_jsx(Route, { path: "controls", element: _jsx(FormElementsControls, {}) }), _jsx(Route, { path: "layouts", element: _jsx(FormElementsLayouts, {}) }), _jsx(Route, { path: "validation", element: _jsx(FormElementsValidation, {}) }), _jsx(Route, { path: "wizard-1", element: _jsx(FormWizardVar1, {}) }), _jsx(Route, { path: "wizard-2", element: _jsx(FormWizardVar2, {}) }), _jsx(Route, { path: "wizard-3", element: _jsx(FormWizardVar3, {}) }), _jsx(Route, { path: "sticky-headers", element: _jsx(FormElementsSticky, {}) }), _jsx(Route, { path: "datepicker", element: _jsx(FormDatePicker, {}) }), _jsx(Route, { path: "toggle-switch", element: _jsx(FormToggleSwitch, {}) }), _jsx(Route, { path: "range-slider", element: _jsx(FormRangeSlider, {}) }), _jsx(Route, { path: "wysiwyg-editor", element: _jsx(FormWysiwygEditor, {}) }), _jsx(Route, { path: "input-selects", element: _jsx(FormMultiSelect, {}) }), _jsx(Route, { path: "dropdown", element: _jsx(FormDropdown, {}) }), _jsx(Route, { path: "input-mask", element: _jsx(FormInputMask, {}) }), _jsx(Route, { path: "dropzone", element: _jsx(FormDropZone, {}) }), _jsx(Route, { path: "typeahead", element: _jsx(FormTypeahead, {}) }), _jsx(Route, { path: "clipboard", element: _jsx(FormClipboard, {}) }), _jsx(Route, { path: "textarea-autosize", element: _jsx(FormTextareaAutosize, {}) }), _jsx(Route, { path: "numberspinners", element: _jsx(FormsNumberPickerExamples, {}) }), _jsx(Route, { path: "color-picker", element: _jsx(FormColorPicker, {}) })] }));
};
