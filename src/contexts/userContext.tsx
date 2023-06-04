import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iLogin, iRegister, iUser } from "../interfaces";
import { AxiosError } from "axios";
import { iAttUser } from "../interfaces/user";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserProvider {
  user: iUser;
  loadingRequest: boolean;
  loadingToken: boolean;
  login: (dataFormLogin: iLogin) => void;
  registerUser: (dataFormRegister: iRegister) => void;
  logout: () => void;
  attUser: (data: iAttUser) => void;
  deleteUser: () => void;
  isModalUserOpen: boolean;
  toggleModalUser: () => void;
}

export const UserContext = createContext<iUserProvider>({} as iUserProvider);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [user, setUser] = useState({} as iUser);
  const [loadingToken, setLoadingToken] = useState(true);
  const [isModalUserOpen, setIsModalUserOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      setLoadingToken(true);

      const token: string | null = localStorage.getItem("@m6-sp2-token");

      if (!token) {
        setLoadingToken(false);

        return;
      }

      try {
        const jsonToken: string = JSON.parse(token);

        api.defaults.headers.common.authorization = `Bearer ${jsonToken}`;

        const user: iUser = await retrieveUserData();

        setUser(user);

        navigate("/dashboard", { replace: true });
      } catch (error) {
        localStorage.removeItem("@m6-sp2-token");
      } finally {
        setLoadingToken(false);
      }
    };

    getUser();
  }, []);

  const login = async (dataFormLogin: iLogin): Promise<void> => {
    setLoadingRequest(true);
    try {
      const { data } = await api.post("login", dataFormLogin);

      localStorage.removeItem("@m6-sp2-token");

      localStorage.setItem("@m6-sp2-token", JSON.stringify(data.token));

      api.defaults.headers.common.authorization = `Bearer ${data.token}`;

      const user = await retrieveUserData();

      setUser(user);

      navigate("/dashboard", { replace: true });

      toast.success("Login feito com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    } finally {
      setLoadingRequest(false);
    }
  };

  const registerUser = async (dataFormRegister: iRegister): Promise<void> => {
    setLoadingRequest(true);
    try {
      const { data } = await api.post("users", dataFormRegister);

      setUser(data.user);

      toast.success("Cadastro feito com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    } finally {
      setLoadingRequest(false);
    }
  };

  const retrieveUserData = async (): Promise<iUser> => {
    const { data } = await api.get("users/retrieveData");

    return data;
  };

  const logout = (): void => {
    localStorage.removeItem("@m6-sp2-token");

    navigate("/", { replace: true });
  };

  const toggleModalUser = () => {
    setIsModalUserOpen(!isModalUserOpen);
  };

  const attUser = async (dataFormAtt: iAttUser): Promise<void> => {
    setLoadingRequest(true);
    try {
      const id: number = user.id;
      const { data } = await api.patch(`users/${id}`, dataFormAtt);
      console.log(data);
      setUser(data);

      setIsModalUserOpen(!isModalUserOpen);
      toast.success("Usuário atualizado com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    } finally {
      setLoadingRequest(false);
    }
  };

  const deleteUser = async (): Promise<void> => {
    setLoadingRequest(true);
    try {
      const id: number = user.id;
      await api.delete(`users/${id}`);
      setIsModalUserOpen(!isModalUserOpen);

      localStorage.removeItem("@m6-sp2-token");

      navigate("/", { replace: true });

      toast.success("Usuário deletado com sucesso");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message: string = err.response?.data.message;
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro!");
      }
    } finally {
      setLoadingRequest(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loadingRequest,
        user,
        loadingToken,
        login,
        registerUser,
        logout,
        attUser,
        deleteUser,
        isModalUserOpen,
        toggleModalUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
