import { useContext, useState } from "react";
import FormInput from "./FormInput";
import { FormContext } from "../contexts/FormContext";

const SignupForm = () => {
  const { formValues, setFormValues } = useContext(FormContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={onChange}
          value={formValues.firstName}
          required={true}
        ></FormInput>
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={onChange}
          value={formValues.lastName}
        ></FormInput>
        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
