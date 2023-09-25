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
    <div className="flex flex-col space-y-2">
      <input className={`outline outline-1 ${props.error ? "outline-primary-red": "outline-neutral-grayishBlue"}  focus:outline-neutral-darkBlue rounded-md py-4 px-8`} {...props} />
      {props.error && <p className="text-primary-red text-sm italic text-right">{props.error}</p>}
    </div>
  );
};
export default FormInput;
