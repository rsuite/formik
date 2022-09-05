import { FieldProps } from "formik";
import {
  CheckTreePicker as RsCheckTreePicker,
  CheckTreePickerProps as RsCheckTreePickerProps,
} from "rsuite";

import formikCompatible from "./formikCompatible";

export interface CheckTreePickerProps
  extends FieldProps<string[]>,
    RsCheckTreePickerProps<string> {}

export const CheckTreePicker = formikCompatible(RsCheckTreePicker);
