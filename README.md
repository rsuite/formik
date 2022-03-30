# @rsuite/formik

Formik-compatible React Suite form components

> ## DISCLAIMER
>
> This package is still under development (on beta branch) and doesn't have a stable release yet,
> please use with caution.

## Usage

```jsx
import { Formik, Form, Field } from "formik";
import { Input } from "@rsuite/formik";

render(
  <Formik
    initialValues={{
      name: "",
    }}
  >
    <Form>
      <Field name="name" component={Input} />
    </Form>
  </Formik>
);
```

## License

MIT &copy; [React Suite](https://github.com/rsuite) team
