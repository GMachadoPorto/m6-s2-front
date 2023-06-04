import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas";
import { iRegister } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledForm } from "./style";
import { useUser } from "../../hooks";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: zodResolver(registerSchema),
  });

  const { registerUser } = useUser();

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)} noValidate>
      <fieldset>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
      </fieldset>
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
      <fieldset>
        <label>Confirme sua senha</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Digite sua senha..."
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </fieldset>
      <fieldset>
        <label>Telefone</label>
        <input
          type="number"
          {...register("telephone")}
          placeholder="Digite seu telefone..."
        />
        {errors.telephone?.message && <p>{errors.telephone.message}</p>}
      </fieldset>
      <button type="submit">Cadastrar</button>
      <span>Faça seu registro para poder acessar!</span>
    </StyledForm>
  );
};
