import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image,
    Text,
  } from '@chakra-ui/react';
  import DashboardLogo from "../assets/DashboardLogo.svg"

export const MainModal = () => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent alignItems={"center"}>
                <ModalHeader alignItems={"center"}>
                    <Text fontSize={"md"}>How nice to have you here!</Text>
                    <Text fontSize={"md"}>It's time to organize your staff</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <Image src={DashboardLogo} alt="DashboardLogo"/>
                    <Text fontSize={"sm"} fontWeight={"normal"}>You can register as many people as you want </Text>
                </ModalBody>
                <ModalFooter w={"100%"} justifyContent={"center"}>
                    <Button colorScheme='blue' mr={3} onClick={onClose} width={"70%"}>
                    Get Started
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}