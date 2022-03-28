# @rsuite/formik

Formik-compatible React Suite form components

    npm i rsuite formik @rsuite/formik

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
