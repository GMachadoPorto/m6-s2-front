import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "../../hooks";
import { iAttUser } from "../../interfaces";
import { attUserSchema } from "../../schemas";
import { StyledDiv } from "./style";

export const ModalUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAttUser>({
    resolver: zodResolver(attUserSchema),
  });

  const { attUser, deleteUser, toggleModalUser, user } = useUser();

  return (
    <StyledDiv>
      <main>
        <h3>Atualizar usuário</h3>
        <button onClick={toggleModalUser} className="close">
          X
        </button>
        <form onSubmit={handleSubmit(attUser)} noValidate>
          <fieldset>
            <label>Nome</label>
            <input type="text" defaultValue={user.name} {...register("name")} />
            {errors.name?.message && <p>{errors.name.message}</p>}
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              defaultValue={user.email}
              type="email"
              placeholder="Digite o email..."
              {...register("email")}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
          </fieldset>
          <fieldset>
            <label>Telefone</label>
            <input
              type="number"
              defaultValue={user.telephone}
              {...register("telephone")}
              placeholder="Digite o telefone..."
            />
            {errors.telephone?.message && <p>{errors.telephone.message}</p>}
          </fieldset>

          <button type="submit">Atualizar</button>
          <button type="button" className="delete" onClick={deleteUser}>
            Deletar
          </button>
        </form>
      </main>
    </StyledDiv>
  );
};
