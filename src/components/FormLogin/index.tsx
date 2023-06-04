import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas";
import { iLogin } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledForm } from "./style";
import { useUser } from "../../hooks";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useUser();

  return (
    <StyledForm onSubmit={handleSubmit(login)} noValidate>
      <fieldset>
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email..."
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </fieldset>

      <fieldset>
        <label>Senha</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite sua senha..."
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </fieldset>

      <button type="submit">Login</button>
      <span>Faça seu login para poder acessar!</span>
    </StyledForm>
  );
};
