import { useState, useEffect, Fragment } from "react";
function SimpleForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    organisationName: "",
    email: "",
    phoneNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.organisationName) {
      errors.organisationName = "Required";
    }
    if (!values.email) {
      errors.email = "Required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email Format !";
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = "Phone number is required";
      } 
    return errors;
  };
  return (
    <div>
      <Fragment>
        <center>Simple Login Form</center>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"  
              placeholder="First Name"
              values={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.firstName}</p>

          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              values={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.lastName}</p>

          <div className="form-control">
            <label htmlFor="organisationName">Organisation Name</label>
            <input
              type="text"
              name="organisationName"
              placeholder="Organisation Name"
              values={formValues.organisationName}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.organisationName}</p>

          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.email}</p>

          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              pattern="[+-]?\d+(?:[.,]\d+)?"

              placeholder="Phone Number"
              values={formValues.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <p style={{ color: "red" }}>{formErrors.phoneNumber}</p>
          <div className="button">
            <button type="submit" className=" btn">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    </div>
  );
}
export default SimpleForm;
