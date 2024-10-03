import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  firstName: yup.string().required("Firstname field is required."),
  lastName: yup.string().required("Lastname field is required."),
  email: yup.string().email().required("Enter a valid email address."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Sifre tekrari alani zorunludur."),
  confirmPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Lutfen kutucugu onaylayiniz.")
    .oneOf([yup.ref("password", yup.password)], "Sifreler eslesmiyor"),
});
