import { styled } from "styled-components";

export const StyledDiv = styled.div`
  width: clamp(300px, 80%, 500px);
  height: 100%;
  max-height: 100vh;
  margin: 0 auto;
  padding-top: 1rem;
  border-radius: 0.4rem;
  position: relative;
  background-color: var(--color-gray-2);
  z-index: 1;

  h2 {
    text-align: center;
    margin: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  .user {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
  }

  .logout {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
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
  div {
    padding-right: 8px;
    margin-right: 8px;
  }

  ul {
    width: 98%;
    height: 400px;
    margin: 0 auto;
    margin-top: 0.8rem;
    padding-bottom: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    overflow-y: auto;
  }
  ul::-webkit-scrollbar {
    height: 100%;
    width: 0.8rem;
    background-color: transparent;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 8px;
  }
`;
