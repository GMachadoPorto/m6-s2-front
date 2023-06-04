import { useContext } from "react";
import { ContactContext } from "../contexts/contactContext";

export const useContact = () => {
  const useContactContext = useContext(ContactContext);

  return useContactContext;
};
