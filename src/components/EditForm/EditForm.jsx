import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
// import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

export const EditForm = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [name, setName] = useState(contact.name);
  //   const [number, setNumber] = useState(contact.number);

  const handleSubmitForm = e => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="outline"
        // isLoading={isLoading ? true : false}
        colorScheme="purple"
        aria-label="Edit contact"
        size="md"
        fontSize="20px"
        icon={<MdModeEdit />}
      />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit contacts</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitForm}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={contact.name}
                  placeholder="First name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Number</FormLabel>
                <Input
                  type="tel"
                  name="number"
                  value={contact.number}
                  placeholder="Last name"
                />
              </FormControl>
            </form>
            <Button
              aria-label="Save contacts"
              colorScheme="purple"
              size="md"
              onClick={onClose}
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
