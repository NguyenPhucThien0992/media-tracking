import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextInput = ({
  input,
  width,
  type,
  classNameDiv,
  placeholder,
  className,
  meta: { touched, error }
}) => {
  return (
    <Form.Field
      className={classNameDiv}
      error={touched && !!error}
      width={width}
    >
      <input
        className={className}
        {...input}
        placeholder={placeholder}
        type={type}
      ></input>
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;
