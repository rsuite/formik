import React from "react";

import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form, Field, FormikProps } from "formik";
import _ from "lodash";

import { DateRangePicker } from "../DateRangePicker";

test("适配 formik", async () => {
  const formikRef = React.createRef<FormikProps<any>>();
  render(
    <Formik
      innerRef={formikRef}
      initialValues={{
        range: [
          new Date(2022, 8, 14, 14, 45, 0),
          new Date(2022, 9, 14, 14, 45, 0),
        ],
      }}
      onSubmit={_.noop}
    >
      <Form>
        <Field name="range" component={DateRangePicker} />
      </Form>
    </Formik>
  );

  expect(screen.getByRole("combobox")).toHaveTextContent(
    "2022-09-14 ~ 2022-10-14"
  );

  userEvent.click(screen.getByRole("combobox"));
  userEvent.click(screen.getByTitle("13 Sep 2022"));
  userEvent.click(screen.getByTitle("13 Oct 2022"));
  userEvent.click(screen.getByRole("button", { name: "OK" }));

  await waitFor(() => {
    expect(formikRef.current?.values).toHaveProperty("range", [
      new Date(2022, 8, 13, 14, 45, 0),
      new Date(2022, 9, 13, 14, 45, 0),
    ]);
  });
});
