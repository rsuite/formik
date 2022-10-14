import { FieldProps } from "formik";
import {
  DateRangePicker as RsDateRangePicker,
  DateRangePickerProps as RsDateRangePickerProps,
} from "rsuite";

import formikCompatible from "./formikCompatible";

export interface DateRangePickerProps
  extends FieldProps<[Date, Date]>,
    RsDateRangePickerProps {}

export const DateRangePicker = formikCompatible(RsDateRangePicker);
