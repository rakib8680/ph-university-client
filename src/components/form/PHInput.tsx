import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      {label ? <label htmlFor={label}>{label}: </label> : null}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} id={name} {...field} />}
      />
    </div>
  );
};

export default PHInput;
