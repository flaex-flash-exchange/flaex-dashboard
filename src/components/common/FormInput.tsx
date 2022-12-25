import { InputHTMLAttributes, useState } from "react";
import InputType from "./InputType";

type FormInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
  onChange: (e: any) => void;
  types?: string;
  classNameWrap?: string;
};

const FormInput = (props: FormInput): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, types, classNameWrap, ...inputProps } =
    props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className={classNameWrap}>
      {label && <label>{label}:</label>}
      <InputType
        types={types}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        data-focused={focused.toString()}
      />

      {errorMessage && (
        <span className="block invisible opacity-0 h-0 overflow-hidden text-red-500 transition-opacity duration-300 text-[12px]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormInput;
