import { styled } from "styled-components";

export const StyledDiv = styled.div`
  width: clamp(300px, 80%, 500px);
  height: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  border-radius: 0.4rem;
  background-color: var(--color-gray-2);

  h2 {
    text-align: center;
    margin: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }

  nav {
    height: 40px;
    border-radius: 0.4rem 0.4rem 0 0;
    border-bottom: 1px solid var(--color-gray-3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: var(--color-gray-2);

    button {
      width: max-content;
      min-width: 20%;
      height: 80%;
      padding: 0 0.5rem;
      border: 2px solid var(--color-primary-50);
      border-radius: 0.4rem;
      background-color: var(--color-primary-50);

      &:hover {
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
      }
      &.active {
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
      }
    }
  }
`;
