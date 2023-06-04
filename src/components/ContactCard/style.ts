import { styled } from "styled-components";

export const StyledDiv = styled.div`
  cursor: pointer;
  width: 90%;
  min-height: 100px;
  padding-left: 1.2rem;
  border: 0.2rem solid var(--color-primary-75);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);

  p {
    font-size: 1.6rem;
  }
`;
