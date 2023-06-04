import { useState } from "react";
import { StyledMain } from "../../styles/setupPage";
import { StyledDiv } from "./style";
import { FormContact } from "../../components/FormContact";
import { useContact, useUser } from "../../hooks";
import { ContactCard } from "../../components/ContactCard";
import { ModalContact } from "../../components/ModalContact";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ModalUser } from "../../components/ModalUser";

export const MainPage = () => {
  const { contacts, isOpenModal } = useContact();
  const { logout, toggleModalUser, isModalUserOpen } = useUser();

  const [isContact, setIsContact] = useState(false);

  const changeForm = (newState: boolean) => {
    if (newState !== isContact) {
      setIsContact(!isContact);
    }
    return;
  };

  return (
    <StyledMain>
      {isOpenModal && <ModalContact />}
      {isModalUserOpen && <ModalUser />}
      <StyledDiv>
        <h2>Contacts Manager</h2>

        <button className="user" onClick={toggleModalUser}>
          <FaUserCircle />
        </button>
        <button className="logout" onClick={logout}>
          <FiLogOut />
        </button>

        <nav>
          <button
            onClick={() => changeForm(true)}
            className={isContact ? "active" : ""}
          >
            Adicionar contato
          </button>
          <button
            onClick={() => changeForm(false)}
            className={isContact ? "" : "active"}
          >
            Visualizar contatos
          </button>
        </nav>
        {isContact ? (
          <div>
            <FormContact />
          </div>
        ) : (
          <ul>
            {contacts.map((contact) => {
              return <ContactCard key={contact.id} contactData={contact} />;
            })}
          </ul>
        )}
      </StyledDiv>
    </StyledMain>
  );
};
