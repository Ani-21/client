import { FC, InputHTMLAttributes } from "react";

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

const BaseInput = ({ name, label, ...rest }: BaseInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input {...rest} />
    </div>
  );
};

export default BaseInput;
