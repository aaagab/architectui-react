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
  return (
    <Route path="forms" element={<CustomSuspense text="Forms" />}>
      {/* Form Elements */}

      <Route path="controls" element={<FormElementsControls />} />
      <Route path="layouts" element={<FormElementsLayouts />} />
      <Route path="validation" element={<FormElementsValidation />} />
      <Route path="wizard-1" element={<FormWizardVar1 />} />
      <Route path="wizard-2" element={<FormWizardVar2 />} />
      <Route path="wizard-3" element={<FormWizardVar3 />} />
      <Route path="sticky-headers" element={<FormElementsSticky />} />

      {/* Form Components */}

      <Route path="datepicker" element={<FormDatePicker />} />
      <Route path="toggle-switch" element={<FormToggleSwitch />} />
      <Route path="range-slider" element={<FormRangeSlider />} />
      <Route path="wysiwyg-editor" element={<FormWysiwygEditor />} />
      <Route path="input-selects" element={<FormMultiSelect />} />
      <Route path="dropdown" element={<FormDropdown />} />
      <Route path="input-mask" element={<FormInputMask />} />
      <Route path="dropzone" element={<FormDropZone />} />
      <Route path="typeahead" element={<FormTypeahead />} />
      <Route path="clipboard" element={<FormClipboard />} />
      <Route path="textarea-autosize" element={<FormTextareaAutosize />} />
      <Route path="numberspinners" element={<FormsNumberPickerExamples />} />
      <Route path="color-picker" element={<FormColorPicker />} />
    </Route>
  )
};
