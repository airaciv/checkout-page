import styled, { css } from "styled-components";

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: var(--accent-color);
  border: 1px solid #cccccc;
  color: black;
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;
  border-color: ${(props) => (props.isValid ? "#1BD97B" : "#FF8A00")};

  + label {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    color: #cccccc;
    transform-origin: left top;
    user-select: none;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
    ${(props) =>
      props.value &&
      css`
        transform: translateY(-100%) scale(0.75);
      `}
  }

  :focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: var(--accent-color);

    + label {
      color: var(--accent-color);
      transform: translateY(-100%) scale(0.75);
    }
  }
`;

export default Input;
