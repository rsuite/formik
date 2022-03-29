import React from "react";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";
import { Radio } from "rsuite";

import { RadioGroup } from "../RadioGroup";

test("适配 formik", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByLabelText } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        fruit: "Apple",
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="fruit" component={RadioGroup}>
          <Radio value="Apple">Apple</Radio>
          <Radio value="Banana">Banana</Radio>
        </Field>
      </Form>
    </Formik>
  );

  expect(getByLabelText("Apple")).toBeChecked();

  userEvent.click(getByLabelText("Banana"));

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("fruit", "Banana");
  });
});
