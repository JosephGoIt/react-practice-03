import { Component } from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export class ContactListItem extends Component {

  componentWillUnmount() {
    console.log("componentWillUnmount");
  };

  // handleDelete method
  handleDelete = () => {
    const {filteredContact, deleteContact} = this.props;
    deleteContact(filteredContact.id);
  };

  render () {
    const {filteredContact} = this.props;
    return (
      <li className={css.contactListItem}>
        <p>{filteredContact.name}:</p>
        <p>{filteredContact.number}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
}
}

// ContactListItem.propTypes = {
//   filteredContact: PropTypes.object.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };


// Functional Components
// export const ContactListItem = ({ filteredContact, deleteContact }) => {
//   // handleDelete method
//   const handleDelete = () => {
//     deleteContact(filteredContact.id);
//   };

//   return (
//     <li className={css.contactListItem}>
//       <p>{filteredContact.name}:</p>
//       <p>{filteredContact.number}</p>
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// };

// ContactListItem.propTypes = {
//   filteredContact: PropTypes.object.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };