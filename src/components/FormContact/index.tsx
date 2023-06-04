import { useForm } from "react-hook-form";
import { contactSchema } from "../../schemas";
import { iContact } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledForm } from "./style";
import { useContact } from "../../hooks";

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContact>({
    resolver: zodResolver(contactSchema),
  });

  const { addContact } = useContact();

  return (
    <StyledForm onSubmit={handleSubmit(addContact)} noValidate>
      <fieldset>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite o nome..."
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
      </fieldset>
      <fieldset>
        <label>Email</label>
        <input
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
          {...register("telephone")}
          placeholder="Digite o telefone..."
        />
        {errors.telephone?.message && <p>{errors.telephone.message}</p>}
      </fieldset>

      <button type="submit">Cadastrar Contato</button>
      <span>Adicione um contato seu!</span>
    </StyledForm>
  );
};
