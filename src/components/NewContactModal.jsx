import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react';
import { FormNewContact } from './FormNewContact';

export const NewContactModal = (user) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    user = user.user;

    return (
        <>
        <Button
            p='4'
            mx='4'
            mt='6'
            w='90%'
            colorScheme='blue'
            variant='solid'
            onClick={onOpen}
        >
            Add New Contact
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent alignItems={"center"}>
                <ModalCloseButton />
                <ModalBody display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <FormNewContact user={user}/>
                </ModalBody>
                <ModalFooter w={"100%"} justifyContent={"center"}>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}