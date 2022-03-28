import React from 'react';

import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field, FormikProps } from 'formik';
import _ from 'lodash';

import { Input } from '../Input';

test('适配 formik', async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByTestId } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        text: 'value',
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="text" component={Input} data-testid="input" />
      </Form>
    </Formik>
  );

  expect(getByTestId('input')).toHaveValue('value');

  userEvent.clear(getByTestId('input'));
  userEvent.type(getByTestId('input'), 'newvalue');

  await waitFor(() => {
    expect(formikRef.current.values).toHaveProperty('text', 'newvalue');
  });
});
