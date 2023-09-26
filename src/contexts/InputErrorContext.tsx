import { Dispatch, createContext, useState } from "react";
import { FormValues } from "./FormContext";

type InputErrors = {
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
};

type InputErrorContextProviderProps = {
  children: React.ReactNode;
};

export interface InputErrorContextInterface {
  inputErrors: InputErrors;
  validateInputs: Dispatch<FormValues>;
}

const initialState = {
  inputErrors: {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  },
  validateInputs: () => {},
} as InputErrorContextInterface;

export const InputErrorContext = createContext(initialState);

export const InputErrorContextProvider = ({
  children,
}: InputErrorContextProviderProps) => {
  const [inputErrors, setInputErrors] = useState<InputErrors>(
    initialState.inputErrors
  );

  const validateInputs = (formValues: FormValues): boolean => {
    const { firstName, lastName, email, password } = formValues;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Set the error messages based on the form values
    const firstNameError =
      firstName.length === 0 ? "First name cannot be empty" : "";
    const lastNameError =
      lastName.length === 0 ? "Last name cannot be empty" : "";
    const emailError =
      email.length === 0
        ? "Email cannot be empty"
        : !emailRegex.test(email)
        ? "Looks like this is not an email"
        : "";
    const passwordError =
      password.length === 0 ? "Password cannot be empty" : "";

    // Set the input error
    setInputErrors({
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    });

    // If any of the errors are not empty, return false
    return !(firstNameError || lastNameError || emailError || passwordError);
  };

  return (
    <InputErrorContext.Provider value={{ inputErrors, validateInputs }}>
      {children}
    </InputErrorContext.Provider>
  );
};
