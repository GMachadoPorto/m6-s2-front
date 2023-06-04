import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { iContact, iContactReturn } from "../interfaces";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface iContactProviderProps {
  children: React.ReactNode;
}

interface iContactProvider {
  contacts: iContactReturn[];
  addContact: (data: iContact) => void;
  attContact: (data: iContact) => void;
  contactInModal: iContactReturn;
  actualContact: (data: iContactReturn) => void;
  isOpenModal: boolean;
  toggleModal: () => void;
  deleteContact: () => void;
}

export const ContactContext = createContext<iContactProvider>(
  {} as iContactProvider
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const [contacts, setContacts] = useState([] as iContactReturn[]);
  const [contactInModal, setContactInModal] = useState({} as iContactReturn);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const getContacts = async (): Promise<void> => {
      const { data } = await api.get("contacts");

      setContacts(data);

      return;
    };

    getContacts();
  }, []);

  const addContact = async (contactData: iContact): Promise<void> => {
    try {
      const { data } = await api.post("contacts", contactData);

      setContacts((oldValue) => [...oldValue, data]);

      toast.success("Cadastro feito com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    }
  };

  const actualContact = (data: iContactReturn): void => {
    setContactInModal(data);
    setIsOpenModal(!isOpenModal);
  };

  const toggleModal = (): void => {
    setIsOpenModal(!isOpenModal);
  };

  const attContact = async (contactData: iContact): Promise<void> => {
    try {
      const id: number = contactInModal.id;
      const { data } = await api.patch(`contacts/${id}`, contactData);

      setContacts((oldValue) => {
        const newValue: iContactReturn[] = oldValue.map((contact) => {
          if (contact.id === data.id) {
            contact = data;
          }

          return contact;
        });
        return newValue;
      });
      setIsOpenModal(!isOpenModal);
      toast.success("Atualização feita com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    }
  };

  const deleteContact = async (): Promise<void> => {
    try {
      const id: number = contactInModal.id;
      await api.delete(`contacts/${id}`);

      setContacts((oldValue) => {
        const newValue: iContactReturn[] = oldValue.filter(
          (contact) => contact.id !== id
        );
        return newValue;
      });
      setIsOpenModal(!isOpenModal);
      toast.success("Contato removido com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        actualContact,
        isOpenModal,
        toggleModal,
        contactInModal,
        attContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
