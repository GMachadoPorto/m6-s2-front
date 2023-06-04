import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const useUser = () => {
  const useUserContext = useContext(UserContext);

  return useUserContext;
};
