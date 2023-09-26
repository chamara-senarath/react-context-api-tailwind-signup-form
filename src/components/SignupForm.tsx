import { useContext } from "react";
import FormInput from "./FormInput";
import { FormContext } from "../contexts/FormContext";
import { InputErrorContext } from "../contexts/InputErrorContext";

const SignupForm = () => {
  const { formValues, setFormValues } = useContext(FormContext);
  const { inputErrors, validateInputs } = useContext(InputErrorContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values = { ...formValues, [e.target.name]: e.target.value };
    validateInputs(values);
    setFormValues(values);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateInputs(formValues);
  };

  return (
    <form
      className="flex flex-col rounded-md p-8 shadow-[0px_8px_0px_0px] shadow-neutral-darkBlue/20 space-y-4 bg-white"
      onSubmit={handleSubmit}
    >
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
      <button className="p-4 bg-primary-green shadow-[0px_2px_0px_0px] shadow-primary-green/50 rounded-md uppercase text-white text-sm">
        Claim your free trial
      </button>
      <p className="text-neutral-grayishBlue text-xs text-center">
        By clicking the button, you are agreeing to our{" "}
        <a className="text-primary-red">Terms of Service</a>
      </p>
    </form>
  );
};

export default SignupForm;
