import React from "react";
import { Form, Label, Button } from "semantic-ui-react";

const ImageUploadInput = ({
  input,
  type,
  classNameDiv,
  placeholder,
  onChange,
  className,
  fileInputRef,
  fileChange,
  meta: { error }
}) => {
  return (
    <Form.Field className={classNameDiv} error={error}>
      <Button
        content="Choose File"
        labelPosition="left"
        icon="file"
        onClick={() => fileInputRef.current.click()}
      />

      <input
        name={input.name}
        ref={fileInputRef}
        type="file"
        hidden
        onChange={input.onChange}
      />

      {error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default ImageUploadInput;
