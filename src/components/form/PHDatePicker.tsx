import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const PHDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large"  style={{width: '100%'}}/>
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
