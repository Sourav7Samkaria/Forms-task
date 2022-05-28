import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  firstName: "",
  lastName: "",
  organisationName: "",
  email: "",
  phoneNumber: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(15)
    .required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  organisationName: Yup.string().required("Organisation Name is Required"),
  email: Yup.string()
    .email("Invalid Email format")
    .required("Email is Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Enter a valid format.")
    .required("Phone number is Required"),
});

const FormikForm = () => {
  return (
    <div>
      <div className="form-name">Formik Form</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" placeholder="First Name" name="firstName" />{" "}
            <div className="error-message">
              <ErrorMessage name="firstName" />{" "}
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" placeholder="Last Name " />{" "}
            <div className="error-message">
              <ErrorMessage name="lastName" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="organisationName">Organisation Name</label>
            <Field type="text" id="organisationName" name="organisationName" placeholder="Organisation Name " />
            <div className="error-message">
              <ErrorMessage name="organisationName" />{" "}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email"  placeholder="E-mail " />{" "}
            <div className="error-message">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"/>
            <div className="error-message">
              {" "}
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

          <div className="button">
            <button type="" className=" btn">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default FormikForm;
