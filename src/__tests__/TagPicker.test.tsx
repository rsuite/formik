import React from 'react';

import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field, FormikProps } from 'formik';
import _ from 'lodash';

import { TagPicker } from '../TagPicker';

test.skip('适配 formik', async () => {
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
          component={TagPicker}
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

  // fixme 这条断言现在无法通过, 这是 rsuite 的一个 bug
  expect(getByRole('combobox')).toHaveTextContent('Apple');

  userEvent.click(getByRole('combobox'));
  userEvent.click(getByText('Banana'));

  await waitFor(() => {
    expect(formikRef.current.values).toHaveProperty('fruits', ['Apple', 'Banana']);
  });
});
