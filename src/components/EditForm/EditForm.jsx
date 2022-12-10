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
  useColorModeValue,
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

  const backgroundBtn = useColorModeValue('purple.600', 'btnOutlineBG');
  const backgroundBtnSave = useColorModeValue('purple.600', 'darkBG');
  const hoverBtn = useColorModeValue('hoverWhite', 'hoverBlack');
  const lightBackground = useColorModeValue(
    'lightBtnBGWhite',
    'lightBtnBGDark'
  );

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
        bg="none"
        color={backgroundBtn}
        borderColor={backgroundBtn}
        _active={{ color: backgroundBtn, borderColor: backgroundBtn }}
        _hover={{
          color: hoverBtn,
          background: lightBackground,
          borderColor: hoverBtn,
        }}
        aria-label="Edit contact"
        size="md"
        fontSize="20px"
        icon={<MdModeEdit bg={backgroundBtn} />}
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
                        color={backgroundBtn}
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
                    _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                    focusBorderColor={backgroundBtn}
                  />
                </InputGroup>
              </FormControl>

              <FormControl my={4}>
                <InputGroup size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color={backgroundBtn} />}
                  />
                  <Input
                    type="tel"
                    name="number"
                    id="contact_email"
                    defaultValue={contact.number}
                    _placeholder={{ opacity: 0.6, color: backgroundBtn }}
                    focusBorderColor={backgroundBtn}
                    placeholder="Phone number"
                  />
                </InputGroup>
              </FormControl>
              <Button
                mt={4}
                type="submit"
                aria-label="Save contacts"
                color="mainWhite"
                bg={backgroundBtnSave}
                _active={{ background: backgroundBtnSave }}
                _hover={{ background: hoverBtn }}
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
