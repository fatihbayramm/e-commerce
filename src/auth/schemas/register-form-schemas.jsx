import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  firstName: yup.string().required("Firstname field is required."),
  lastName: yup.string().required("Lastname field is required."),
  email: yup.string().email().required("Enter a valid email address."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password field is required."),
  confirmPassword: yup
    .string()
    .required("Confirm Password field is required.")
    .oneOf([yup.ref("password")], "Passwords do not match."),
});
