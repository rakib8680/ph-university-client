import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
  return (
    <div style={{marginBottom: '15px'}}>
      {label ? <label htmlFor={label}>{label}: </label> : null}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} id={name} {...field} />}
      />
    </div>
  );
};

export default PHInput;
