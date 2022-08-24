import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';
import { FormRegister } from './FormRegister';

export const RegisterModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button colorScheme={"blue"} color={"white"} mt={"10px"} onClick={onOpen}>Register Person</Button>
        <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent alignItems={"center"}>
                <ModalCloseButton />
                <ModalBody display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <FormRegister/>
                </ModalBody>
                <ModalFooter w={"100%"} justifyContent={"center"}>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}