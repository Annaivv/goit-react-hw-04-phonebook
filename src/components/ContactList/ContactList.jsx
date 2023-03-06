import PropTypes from 'prop-types';
import { ItemsList, ListItem } from './ContactList.styled';
import Contact from 'components/Contact/Contact';

const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      <ItemsList>
        {items.map((item, idx) => (
          <ListItem key={idx}>
            <Contact contact={item} onDelete={onDelete} />
          </ListItem>
        ))}
      </ItemsList>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
