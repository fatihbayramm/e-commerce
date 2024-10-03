import * as yup from "yup";

export const loginFormSchemas = yup.object().shape({
  email: yup.string().email().required("Enter a valid email address."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password field is required."),
});
