import { useDispatch, useSelector } from 'react-redux';
import { selectFilterSearch, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';


import { Loader } from 'components/Loader/Loader';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilterSearch);
  return (
    <>
      {isLoading && <Loader />}
      <div>
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id} >
              <span>{contact.name}</span>
              <div>
                <span > : {contact.number}</span>
                <button
                  
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactsList;
