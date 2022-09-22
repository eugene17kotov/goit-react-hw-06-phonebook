import { useSelector } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

import {
  StyledContactList,
  StyledContact,
} from 'components/ContactList/ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      {filtredContacts.map(({ id, name, number }) => (
        <StyledContact key={id}>
          <ContactItem id={id} name={name} number={number} />
        </StyledContact>
      ))}
    </StyledContactList>
  );
}
