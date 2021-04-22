import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const AddDataModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [numPeople, setNumPeople] = useState(100);

  const initialRef = useRef();

  const handleClose = () => setShowModal(false);
  const handleAdd = () => {
    setShowModal(false);
    try {
      import("../../../helpers/fillDatabase").then(
        ({ addCitizenToDatabase }) => {
          addCitizenToDatabase(+numPeople);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button colorScheme="gray" onClick={() => setShowModal(true)}>
        Wypełnij bazę danych
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={showModal}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wypełnij bazę testowymi rekordami</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Liczba rekordów do dodania</FormLabel>
              <Input
                ref={initialRef}
                value={numPeople}
                onChange={(event) => setNumPeople(event.target.value)}
                placeholder="Liczba rekordów"
                type="number"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleAdd}>
              Dodaj
            </Button>
            <Button onClick={handleClose}>Anuluj</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddDataModal;
