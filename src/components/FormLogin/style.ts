import { styled } from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: max-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  fieldset {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: none;
  }

  label {
    width: 100%;
    height: max-content;
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    height: 3.8rem;
    padding-left: 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid transparent;
    background-color: var(--color-gray-1);

    &:focus {
      border: 1px solid var(--color-primary);
      background-color: var(--color-gray-0);
    }
  }

  p {
    color: var(--color-negative);
  }

  button {
    width: 100%;
    height: 4rem;
    border-radius: 0.4rem;
    background-color: var(--color-primary-75);

    &:hover {
      background-color: var(--color-primary);
    }
  }

  span {
    width: max-content;
  }
`;
