import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useHistory } from "react-router";

const useHandleFormSubmit = (axiosRequest, isEdit = false) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({});
  const toast = useToast();
  const cancelRef = useRef();

  const handleSubmitForm = (formValues) => {
    setValues(formValues);
    handleOpen();
  };
  const makeRequest = () =>
    axiosRequest(values).then(handleSuccess).catch(handleError);

  const handleSuccess = () => {
    onClose();
    toast({
      title: isEdit ? "Dane obywatela zostały zmienione" : "Obywatel został pomyślnie dodany do bazy",
      duration: 30000,
      status: "success",
      isClosable: true,
    });
    history.push("/");
  };

  const handleError = (error) => {
    onClose();
    toast({
      title: isEdit ? "Dane obywatela nie zostały zmienione" : "Obywatel nie został dodany do bazy danych",
      description: `Wystąpił problem: ${error?.response?.data}`,
      duration: 30000,
      status: "error",
      isClosable: true,
    });
  };

  const onClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const Dialog = () => (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Potwierdź wysłanie danych
          </AlertDialogHeader>

          <AlertDialogBody>
            Czy na pewno chcesz zatwierdzić poprawność danych i wysłać je na
            serwer?
            <br />
            {isEdit ? "" : <b>Po kliknięciu wyślij nie ma już możliwości ich edycji.</b>}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Anuluj
            </Button>
            <Button colorScheme="teal" onClick={makeRequest} ml={3}>
              Wyślij
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );

  return [handleSubmitForm, Dialog];
};
export default useHandleFormSubmit;
