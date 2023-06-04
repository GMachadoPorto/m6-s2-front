import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: #00000025;
  z-index: 2;

  main {
    width: clamp(200px, 80%, 300px);
    height: max-content;
    margin-top: 5rem;
    border-radius: 0.4rem;
    position: relative;
    background-color: var(--color-gray-2);
  }

  h3 {
    margin: 1rem;
    font-size: 2rem;
    font-weight: 400;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }

  form {
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

      &.delete {
        background-color: var(--color-secondary);
      }
    }
  }
`;
