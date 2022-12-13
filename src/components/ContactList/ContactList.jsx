import { SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contacts/contactsApiSlice';
import filterSelectors from '../../redux/filter/filterSelectors';
import { ContactListItem } from '../index';

export const ContactList = () => {
  const { data } = useGetContactsQuery();

  const filter = useSelector(filterSelectors.getFilterValue);

  //
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!data) return;
    const newData = Object.values(data).filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
    return newData.reverse();
  };
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {filteredContacts()?.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </SimpleGrid>
    </>
  );
};
