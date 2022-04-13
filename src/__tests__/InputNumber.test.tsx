import React from "react";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";

import { InputNumber } from "../InputNumber";

test("适配 formik", async () => {
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

  expect(getByRole("spinbutton")).toHaveValue(18);

  userEvent.clear(getByRole("spinbutton"));
  userEvent.type(getByRole("spinbutton"), "29");

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("age", 29);
  });
});

test("点击增加/减少按钮有效", async () => {
  const formikRef = React.createRef<FormikProps<{ age: number }>>();
  const { container } = render(
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

  userEvent.click(container.querySelector(".rs-input-number-touchspin-up")!);

  await waitFor(() => {
    expect(formikRef.current?.values.age).toBe(19);
  });

  userEvent.click(container.querySelector(".rs-input-number-touchspin-down")!);

  await waitFor(() => {
    expect(formikRef.current?.values.age).toBe(18);
  });
});
