import * as yup from "yup";

export const addressFormSchemas = yup.object().shape({
  name: yup.string().required("Address title is required."),
  country: yup.string().required("Country field is required."),
  city: yup.string().required("City field is required."),
  township: yup.string().required("Township field is required."),
  text: yup.string().required("Address field is required."),
});
