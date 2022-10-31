import React from "react";
import { Input, InputError, InputName, InputWrapper } from "./views";

const InputItem = ({ label, handler, error, value, name, type }) => {
  return (
    <InputWrapper>
      <InputName>{label}</InputName>
      <Input name={name} onChange={handler} value={value} type={type} />
      <InputError>{error}</InputError>
    </InputWrapper>
  );
};
export default InputItem;
