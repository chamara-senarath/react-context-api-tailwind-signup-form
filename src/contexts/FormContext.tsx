import { Dispatch, SetStateAction, createContext, useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type InputErrors = {
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

export interface FormContextInterface {
  formValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
  inputErrors: InputErrors;
  validateInputs: Dispatch<void>;
}

const initialState = {
  formValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  setFormValues: () => {},
  inputErrors: {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  },
  validateInputs: () => {},
} as FormContextInterface;

export const FormContext = createContext(initialState);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formValues, setFormValues] = useState<FormValues>(
    initialState.formValues
  );

  const [inputErrors, setInputErrors] = useState<InputErrors>(
    initialState.inputErrors
  );

  const validateInputs = (): boolean => {
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
    <FormContext.Provider
      value={{ formValues, setFormValues, inputErrors, validateInputs }}
    >
      {children}
    </FormContext.Provider>
  );
};
