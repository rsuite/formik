import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Formik, Field } from 'formik';
import _ from 'lodash';

import formikCompatible from '../formikCompatible';

function MyInput({ onChange, ...props }: any) {
  return <input onChange={(e) => onChange?.(e.target.value)} {...props} />;
}

const MyFormikCompatibleInput = formikCompatible(MyInput);

test('兼容 formik 接口', () => {
  render(
    <Formik
      initialValues={{
        myField: 'myValue',
      }}
      onSubmit={_.noop}
    >
      <Field name="myField" component={MyFormikCompatibleInput} />
    </Formik>
  );

  const input = screen.getByDisplayValue('myValue');

  user.clear(input);
  user.type(input, 'updatedValue');
  expect(input).toHaveValue('updatedValue');
});

test('displayName', () => {
  expect(MyFormikCompatibleInput.displayName).toBe('formikCompatible(MyInput)');
});
