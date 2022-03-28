import React from 'react';

import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field, FormikProps } from 'formik';
import _ from 'lodash';

import { InputNumber } from '../InputNumber';

test('适配 formik', async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByRole } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        age: 18,
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="age" component={InputNumber} />
      </Form>
    </Formik>
  );

  expect(getByRole('spinbutton')).toHaveValue(18);

  userEvent.clear(getByRole('spinbutton'));
  userEvent.type(getByRole('spinbutton'), '29');

  await waitFor(() => {
    expect(formikRef.current.values).toHaveProperty('age', '29');
  });
});
