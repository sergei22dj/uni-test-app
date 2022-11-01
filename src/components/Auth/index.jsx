import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../store/reducers/actionCreators";
import { authSlice } from "../../store/reducers/authSlice";
// componenst
import InputItem from "../InputItem";
// loader
import { Loader } from "../Loaders/circle/views";
// helpers
import { validateEmail, validatePassword } from "./validateHelpers";
// views
import {
  Button,
  FormWrapper,
  Modal,
  ModalContent,
  ModalText,
  Wrapper,
} from "./views";

const Auth = () => {
  const { setEmail, setPassword, modalState } = authSlice.actions;
  const { email, password, enter, modalIsOpen, isLoading } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();

  const [validError, setValidError] = useState({
    emailError: "",
    passwordError: "",
  });

  const Login = async () => {
    if (validatePassword(password) && validateEmail(email)) {
      dispatch(auth(password, email));
    }

    if (validateEmail(email)) {
      setValidError((prev) => ({ ...prev, emailError: "" }));
    } else {
      setValidError((prev) => ({
        ...prev,
        emailError: "not valid email",
      }));
    }

    if (validatePassword(password)) {
      setValidError((prev) => ({ ...prev, passwordError: "" }));
    } else {
      setValidError((prev) => ({
        ...prev,
        passwordError: "not valid password",
      }));
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <InputItem
          label="email"
          value={email}
          handler={(e) => dispatch(setEmail(e.target.value))}
          error={validError.emailError}
        />
        <InputItem
          label="password"
          value={password}
          handler={(e) => dispatch(setPassword(e.target.value))}
          error={validError.passwordError}
        />
        <Button onClick={Login}>{isLoading ? <Loader /> : "Login"}</Button>

        {enter && <Navigate to="/main" replace={true} />}
      </FormWrapper>

      {modalIsOpen ? (
        <Modal>
          <ModalContent>
            <ModalText>
              "Internal server error. Please try again later"
            </ModalText>
            <Button onClick={() => dispatch(modalState(false))}>ok</Button>
          </ModalContent>
        </Modal>
      ) : null}
    </Wrapper>
  );
};
export default Auth;
