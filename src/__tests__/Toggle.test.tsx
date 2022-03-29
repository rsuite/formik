import React from "react";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";

import { Toggle } from "../Toggle";

test("适配 formik", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByRole } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        remember: true,
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="remember" component={Toggle} />
      </Form>
    </Formik>
  );

  expect(getByRole("switch")).toBeChecked();

  userEvent.click(getByRole("switch"));

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("remember", false);
  });
});
