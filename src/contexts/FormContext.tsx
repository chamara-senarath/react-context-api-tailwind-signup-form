import { Dispatch, SetStateAction, createContext, useState } from "react";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

export interface FormContextInterface {
  formValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
}

const defaultState = {
  formValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  setFormValues: () => {},
} as FormContextInterface;

export const FormContext = createContext(defaultState);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formValues, setFormValues] = useState<FormValues>(
    defaultState.formValues
  );

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};
