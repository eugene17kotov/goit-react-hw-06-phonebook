import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/itemsSlice';

import { Button } from 'components/Button/Button';

import { ContactInfo } from 'components/ContactItem/ContactItem.styled';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact({ id: contactId }));
  };

  return (
    <>
      <ContactInfo>{name}</ContactInfo>
      <ContactInfo>{number}</ContactInfo>
      <Button
        title="delete"
        type="button"
        onClick={() => onDeleteContact(id)}
      />
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
