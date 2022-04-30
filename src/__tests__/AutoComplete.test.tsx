import React from "react";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";

import { AutoComplete } from "../AutoComplete";

test("Works with formik", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByTestId } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        text: "value",
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="text" component={AutoComplete} data-testid="input" />
      </Form>
    </Formik>
  );

  expect(getByTestId("input")).toHaveValue("value");

  userEvent.clear(getByTestId("input"));
  userEvent.type(getByTestId("input"), "newvalue");

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("text", "newvalue");
  });
});

test("Autocomplete shouold work", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  const { getByTestId, getByText } = render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        text: "",
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field
          name="text"
          component={AutoComplete}
          data={["suggested result"]}
          data-testid="input"
        />
      </Form>
    </Formik>
  );

  userEvent.type(getByTestId("input"), "s");

  userEvent.click(getByText("suggested result"));

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty(
      "text",
      "suggested result"
    );
  });
});
