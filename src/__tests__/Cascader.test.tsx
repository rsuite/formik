import React from "react";

import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";

import { Cascader } from "../Cascader";

test("适配 formik", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        fruit: "Apple",
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field
          name="fruit"
          component={Cascader}
          data={[
            {
              label: "Friuts",
              value: "Friuts",
              children: [
                {
                  label: "Apple",
                  value: "Apple",
                },
                {
                  label: "Banana",
                  value: "Banana",
                },
              ],
            },
          ]}
        />
      </Form>
    </Formik>
  );

  expect(screen.getByRole("combobox")).toHaveTextContent("Friuts / Apple");

  userEvent.click(screen.getByRole("combobox"));
  userEvent.click(screen.getByText("Banana"));

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("fruit", "Banana");
  });
});
