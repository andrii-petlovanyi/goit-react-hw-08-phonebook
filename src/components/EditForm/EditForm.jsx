import {
  Button,
  FormControl,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { usePatchContactMutation } from '../../redux/contacts/contactsApiSlice';
import { MdAccountCircle, MdModeEdit } from 'react-icons/md';
import { PhoneIcon } from '@chakra-ui/icons';

export const EditForm = ({ contact = {} }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [patchContact, { isLoading }] = usePatchContactMutation();

  const handleSubmitForm = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (name === '' || number === '') return;
    const patchedContacts = { name, number };
    patchContact({ contactId: contact.id, patchedContacts });
    onClose();
    toast({
      description: `Contact ${name} updated successfully`,
      isClosable: true,
      status: 'success',
    });
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="outline"
        isLoading={isLoading ? true : false}
        colorScheme="purple"
        aria-label="Edit contact"
        size="md"
        fontSize="20px"
        icon={<MdModeEdit />}
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent py="20px">
          <ModalHeader>Edit contacts</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitForm}>
              <FormControl>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <Icon
                        color="purple.600"
                        boxSize="6"
                        as={MdAccountCircle}
                      />
                    }
                  />
                  <Input
                    type="text"
                    name="name"
                    id="contact_email"
                    defaultValue={contact.name}
                    placeholder="Name"
                    _placeholder={{ opacity: 0.6, color: 'purple.800' }}
                    focusBorderColor="purple.600"
                  />
                </InputGroup>
              </FormControl>

              <FormControl my={4}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="purple.600" />}
                  />
                  <Input
                    type="tel"
                    name="number"
                    id="contact_email"
                    defaultValue={contact.number}
                    _placeholder={{ opacity: 0.6, color: 'purple.800' }}
                    focusBorderColor="purple.600"
                    placeholder="Phone number"
                  />
                </InputGroup>
              </FormControl>
              <Button
                mt={4}
                type="submit"
                aria-label="Save contacts"
                colorScheme="purple"
                size="md"
                width="100%"
                onClick={onClose}
              >
                Save
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
