import { useState } from "react";
import { FormLogin } from "../../components/FormLogin";
import { FormRegister } from "../../components/FormRegister";
import { StyledMain } from "../../styles/setupPage";
import { StyledDiv } from "./style";

export const FormPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const changeForm = (newState: boolean) => {
    if (newState !== isLogin) {
      setIsLogin(!isLogin);
    }
    return;
  };

  return (
    <StyledMain>
      <StyledDiv>
        <h2>Contacts Manager</h2>
        <nav>
          <button
            onClick={() => changeForm(true)}
            className={isLogin ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={() => changeForm(false)}
            className={isLogin ? "" : "active"}
          >
            Cadastro
          </button>
        </nav>
        {isLogin ? <FormLogin /> : <FormRegister />}
      </StyledDiv>
    </StyledMain>
  );
};
