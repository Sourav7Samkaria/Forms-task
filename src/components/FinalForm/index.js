import React from "react";
import { Form, Field } from "react-final-form";
import '../Form.css'

const FinalForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const validate = (values) => {
    const errors = {};

    if (values.firstName && values.firstName.length < 3)
      errors.firstName = "First Name must be between 3 and 15 characters";
    if (!values.firstName) {
      errors.firstName = "First Name cannot be blank";
    }
    if (values.lastName && values.lastName.length < 3)
      errors.lastName = "Last Name must be between 3 and 15 characters";
    if (!values.lastName) errors.lastName = "Last Name cannot be blank";
    if (values.organisationName && values.organisationName.length < 5)
      errors.organisationName =
        " Organisation Name must be between 3 and 15 characters";
    if (!values.organisationName)
      errors.organisationName = "Organisation Name cannot be blank";
    if (!values.email) {
      errors.email = "Email cannot be blank.";
    } else if (
      !values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      errors.email = "Email is not valid";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number can not be blank";
    } else if (!values.phoneNumber.match(/^[0-9\b]+$/)) {
      errors.phoneNumber = "Enter a valid format.";
    }
    return errors;
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <div>
          <div className="form-name">Final Form</div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    {" "}
                    <label>First Name</label>
                    <input {...input} type="text" placeholder="First Name" />
                    {meta.error && meta.touched && (
                      <div>
                        <div className="error-message">{meta.error}</div>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className="form-control">
              <Field name="lastName">
                {({ input, meta }) => (
                  <div>
                    {" "}
                    <label>Last Name</label>
                    <input {...input} type="text" placeholder="Last Name " />
                    {meta.error && meta.touched && (
                      <div>
                        <div className="error-message">{meta.error}</div>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className="form-control">
              <Field name="organisationName">
                {({ input, meta }) => (
                  <div>
                    {" "}
                    <label>Organisation Name </label>
                    <input
                      {...input}
                      type="text"
                      name="organisationName"
                      placeholder="Organisation Name "
                    />
                    {meta.error && meta.touched && (
                      <div>
                        <div className="error-message">{meta.error}</div>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className="form-control">
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    {" "}
                    <label>Email </label>
                    <input {...input} type="email" placeholder="E-mail" />
                    {meta.error && meta.touched && (
                      <div>
                        <div className="error-message">{meta.error}</div>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className="form-control">
              <Field name="phoneNumber">
                {({ input, meta }) => (
                  <div>
                    <label>Phone Number </label>
                    <input
                      {...input}
                      type="text"
                      id="phoneNumber"
                      minLength={6}
                      maxLength={10}
                      placeholder="Phone Number"
                    />
                    {meta.error && meta.touched && (
                      <div>
                        <div className="error-message">{meta.error}</div>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className="button">
              <button type="submit" className=" btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    ></Form>
  );
};

export default FinalForm;
