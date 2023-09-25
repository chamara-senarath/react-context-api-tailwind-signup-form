type FormInputProps = {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
  pattern?: string;
  error?: string;
};

const FormInput = (props: FormInputProps) => {
  return (
    <>
      <input {...props} />
      {props.error && <p className="error">{props.error}</p>}
    </>
  );
};
export default FormInput;
