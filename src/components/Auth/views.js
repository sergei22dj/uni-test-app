import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  border: 2px solid black;
  border-radius: 16px;
  box-shadow: 0px 0px 14px 1px #005f33;
`;
export const Input = styled.input``;
export const Button = styled.button`
  width: 86px;
  height: 34px;
  color: white;
  border-radius: 6px;
  border: none;
  margin-block: 6px;
  cursor: pointer;
  background-color: #005f33;
  &:hover {
    box-shadow: inset 0px 0px 30px -7px rgba(0, 0, 0);
  }
`;

// Modal
export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: center;
`;
export const ModalContent = styled.div`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  text-align: center;
  background-color: white;
  text-transform: uppercase;
  animation: ani 1s forwards;
  @keyframes ani {
    0% {
      scale: 0.3;
    }
    100% {
      scale: 1;
    }
  }
`;
export const ModalText = styled.div`
  font-size: 46px;
  padding-bottom: 40px;
`;
