import { EditIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react';
import { FormUpdate } from './FormUpdate';

export const EditPersonModal = (user) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <EditIcon _hover={{cursor: 'pointer'}} onClick={onOpen}/>
        <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent alignItems={"center"}>
                <ModalCloseButton />
                <ModalBody display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <FormUpdate user={user.user}/>
                </ModalBody>
                <ModalFooter w={"100%"} justifyContent={"center"}>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}