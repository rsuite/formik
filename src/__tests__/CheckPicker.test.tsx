import React from 'react';

import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field, FormikProps } from 'formik';
import _ from 'lodash';

import { CheckPicker } from '../CheckPicker';

test('适配 formik', async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByText, getByRole } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        fruits: ['Apple'],
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field
          name="fruits"
          component={CheckPicker}
          data={[
            {
              label: 'Apple',
              value: 'Apple',
            },
            {
              label: 'Banana',
              value: 'Banana',
            },
          ]}
        />
      </Form>
    </Formik>
  );

  expect(getByRole('combobox')).toHaveTextContent('Apple');

  userEvent.click(getByRole('combobox'));
  userEvent.click(getByText('Banana'));

  await waitFor(() => {
    expect(formikRef.current.values).toHaveProperty('fruits', ['Apple', 'Banana']);
  });
});
