import Button from 'components/Button';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Name,
  Number,
  ContactWrapper,
} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ContactWrapper>
              <Name>{name}:</Name>
              <Number>{number}</Number>
              <Button
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                Delete
              </Button>
            </ContactWrapper>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
