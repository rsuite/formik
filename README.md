# @rsuite/formik

Formik-compatible React Suite form components

    npm i rsuite formik @rsuite/formik@beta

## Usage

Replace form component imports from `rsuite` with `@rsuite/formik`.

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

### Supported rsuite components

- AutoComplete
- Checkbox
- CheckboxGroup
- CheckPicker
- Input
- InputNumber
- RadioGroup
- SelectPicker
- TagPicker
- Toggle

## License

MIT &copy; [React Suite](https://github.com/rsuite) team
