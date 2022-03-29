import React from "react";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";
import { Checkbox } from "rsuite";

import { CheckboxGroup } from "../CheckboxGroup";

test("适配 formik", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByLabelText } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        fruits: ["Apple"],
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="fruits" component={CheckboxGroup}>
          <Checkbox value="Apple">Apple</Checkbox>
          <Checkbox value="Banana">Banana</Checkbox>
        </Field>
      </Form>
    </Formik>
  );

  // fixme 应该直接断言 .toBeChecked()
  //       这里是 rsuite 的 bug
  //       see https://github.com/rsuite/rsuite/pull/2419
  expect(getByLabelText("Apple")).toHaveAttribute("aria-checked", "true");

  userEvent.click(getByLabelText("Banana"));

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("fruits", [
      "Apple",
      "Banana",
    ]);
  });
});
