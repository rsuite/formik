import { FieldProps } from 'formik';
import { TagPicker as RsTagPicker, TagPickerProps as RsTagPickerProps } from 'rsuite';

import formikCompatible from './formikCompatible';

export interface TagPickerProps extends FieldProps<string[]>, RsTagPickerProps {}

export const TagPicker = formikCompatible(RsTagPicker);
