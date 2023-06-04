import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContact } from "../../hooks";
import { iContact } from "../../interfaces";
import { contactSchema } from "../../schemas";
import { StyledDiv } from "./style";

export const ModalContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContact>({
    resolver: zodResolver(contactSchema),
  });

  const { contactInModal, toggleModal, attContact, deleteContact } =
    useContact();

  return (
    <StyledDiv>
      <main>
        <h3>Atualizar contato</h3>
        <button onClick={toggleModal} className="close">
          X
        </button>
        <form onSubmit={handleSubmit(attContact)} noValidate>
          <fieldset>
            <label>Nome</label>
            <input
              type="text"
              defaultValue={contactInModal.name}
              {...register("name")}
            />
            {errors.name?.message && <p>{errors.name.message}</p>}
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              defaultValue={contactInModal.email}
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
              defaultValue={contactInModal.telephone}
              {...register("telephone")}
              placeholder="Digite o telefone..."
            />
            {errors.telephone?.message && <p>{errors.telephone.message}</p>}
          </fieldset>

          <button type="submit">Atualizar</button>
          <button type="button" className="delete" onClick={deleteContact}>
            Deletar
          </button>
        </form>
      </main>
    </StyledDiv>
  );
};
