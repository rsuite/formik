import React from 'react';

import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field, FormikProps } from 'formik';
import _ from 'lodash';

import { Checkbox } from '../Checkbox';

test('适配 formik', async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByLabelText } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        remember: true,
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="remember" component={Checkbox}>
          记住我
        </Field>
      </Form>
    </Formik>
  );

  // fixme 应该直接断言 .toBeChecked()
  //       这里是 rsuite 的 bug
  //       see https://github.com/rsuite/rsuite/pull/2419
  expect(getByLabelText('记住我')).toHaveAttribute('aria-checked', 'true');

  userEvent.click(getByLabelText('记住我'));

  await waitFor(() => {
    expect(formikRef.current.values).toHaveProperty('remember', false);
  });
});
