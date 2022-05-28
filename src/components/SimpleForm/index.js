import React from "react";
import "../Form.css";
import { useForm } from "react-hook-form";
function NewSimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="form-name">Simple  Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className={`${errors.firstName && "invalid"}`}
            {...register("firstName", { required: "Required" })}
            onKeyUp={() => {
              trigger("firstName");
            }}
          />
          {errors.firstName && (
            <div className="error-message">{errors.firstName.message}</div>
          )}
        </div>

        <div className="form-control">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className={`${errors.lastName && "invalid"}`}
            {...register("lastName", { required: "Required" })}
            onKeyUp={() => {
              trigger("lastName");
            }}
          />
          {errors.lastName && (
            <div className="error-message">{errors.lastName.message}</div>
          )}
        </div>

        <div className="form-control">
          <label>Organisation Name</label>
          <input
            type="text"
            placeholder="Organisation Name"
            className={`${errors.organisationName && "invalid"}`}
            {...register("organisationName", { required: "Required" })}
            onKeyUp={() => {
              trigger("organisationName");
            }}
          />
          {errors.organisationName && (
            <div className="error-message">
              {errors.organisationName.message}
            </div>
          )}
        </div>

        <div className="form-control">
          <label>Email:</label>
          <input
            type="text"
            placeholder="E-mail"
            className={` ${errors.email && "invalid"}`}
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}
        </div>
        <div className="form-control">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            placeholder="Phone Number"
            className={` ${errors.phone && "invalid"}`}
            {...register("phoneNumber", {
              required: "Required",
              pattern: {
                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Invalid phone no",
              },
            })}
            onKeyUp={() => {
              trigger("phoneNumber");
            }}
          />
          {errors.phoneNumber && (
            <div className="error-message">{errors.phoneNumber.message}</div>
          )}
        </div>
        <div className="button">
          <button type="submit"  className=" btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewSimpleForm;
