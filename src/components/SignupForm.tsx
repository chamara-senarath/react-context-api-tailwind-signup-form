import { useContext } from "react";
import FormInput from "./FormInput";
import { FormContext } from "../contexts/FormContext";

const SignupForm = () => {
  const { formValues, setFormValues, validateInputs, inputErrors } =
    useContext(FormContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateInputs();
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
          error={inputErrors.firstNameError}
        ></FormInput>
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={onChange}
          value={formValues.lastName}
          error={inputErrors.lastNameError}
        ></FormInput>
        <FormInput
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={onChange}
          value={formValues.email}
          error={inputErrors.emailError}
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={formValues.password}
          error={inputErrors.passwordError}
        ></FormInput>
        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
