import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input: { value, onChange, ...restInput },
  width,
  classNameDiv,
  startDate,
  placeholder,
  className,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
        dateFormat="yyyy/MM/dd"
        placeholderText={placeholder}
        selected={console.log("current value", value)}
        onChange={(e, data) => {
          onChange(console.log("data datepicker", data));
        }}
        {...restInput}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
