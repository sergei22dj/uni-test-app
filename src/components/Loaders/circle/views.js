import styled from "styled-components";

export const Loader = styled.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  color: inherit;
  vertical-align: middle;
  pointer-events: none;
  border: 2px solid currentcolor;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: 1s Loader linear infinite;
  position: relative;

  @keyframes Loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
