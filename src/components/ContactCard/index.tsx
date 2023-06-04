import { useContact } from "../../hooks";
import { iContactReturn } from "../../interfaces";
import { StyledDiv } from "./style";

interface iContactCard {
  contactData: iContactReturn;
}

export const ContactCard = ({ contactData }: iContactCard) => {
  const { actualContact } = useContact();

  const formatPhone = (phone: string) => {
    const ddd: string = phone.substring(0, 2);
    const numberFirstHalf: string = phone.substring(2, 7);
    const numberSecondtHalf: string = phone.substring(7);

    return `(${ddd}) ${numberFirstHalf}-${numberSecondtHalf}`;
  };

  return (
    <StyledDiv onClick={() => actualContact(contactData)}>
      <p>Name: {contactData.name}</p>
      <p>Email: {contactData.email}</p>
      <p>Telephone: {formatPhone(contactData.telephone)}</p>
    </StyledDiv>
  );
};
