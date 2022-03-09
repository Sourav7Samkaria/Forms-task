import { Form, Field } from "react-final-form";
import "./index.css";
const FinalForm = () => {
  const onSubmit = (data, formData) => {
    console.log(data);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) errors.lastName = "Required";

    if (!values.organisationName) errors.organisationName = "Required";

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (
      !values.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      errors.email = "Enter a valid email.";
    }

   
    
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number is required'
    } 
    
    else if (
      !values.phoneNumber.match(/^[0-9\b]+$/)
    ) {
      errors.phoneNumber = "Enter a valid format.";
    }
   
    return errors;
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{
        firstName: "",
        lastName: "",
        organisationName: "",
        email: "",
        phoneNumber: "",
      }}
      render={({ handleSubmit, form, values }) => (
        <div>
         <div className="textCenter">Final Form</div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    {" "}
                    <label htmlFor="firstName">First name</label>
                    <input
                      {...input}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                    {meta.error && meta.touched && (
                      <div>
                        <p style={{ color: "red" }}>{meta.error}</p>
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
                    <label htmlFor="lastName">Last name</label>
                    <input
                      {...input}
                      type="text"
                      name="lastName"
                      placeholder="last Name "
                    />
                    {meta.error && meta.touched && (
                      <div>
                        <p style={{ color: "red" }}>{meta.error}</p>
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
                    <label htmlFor="organisationName">Organisation Name </label>
                    <input
                      {...input}
                      type="text"
                      name="organisationName"
                      placeholder="Organisation Name "
                    />
                    {meta.error && meta.touched && (
                      <div>
                        <p style={{ color: "red" }}>{meta.error}</p>
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
                    <label htmlFor="email">Email </label>
                    <input
                      {...input}
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    {meta.error && meta.touched && (
                      <div>
                        <p style={{ color: "red" }}>{meta.error}</p>
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
                    <label htmlFor="phoneNumber">Phone Number </label>
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
                        <p style={{ color: "red" }}>{meta.error}</p>
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
