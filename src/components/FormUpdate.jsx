import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Text
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useUsers } from '../contexts/users';
import { EditContactModal } from './EditContactModal';
import { NewContactModal } from './NewContactModal';
import { DeleteIcon } from '@chakra-ui/icons';

export const FormUpdate = (user) => {
    user = user.user

    const { updatePerson, delContact } = useUsers();

    const formSchema = yup.object().shape({
        name: yup.string(),
        function: yup.string()
    });

    const {
        register,
        handleSubmit
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => {
        const request = {
            name: data.name,
            function: data.function,
        }

        updatePerson(request, user.id)
    };

    return (
        <>
            <Flex as={'form'} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                <FormControl p='4'>
                    <FormLabel>Name</FormLabel>
                    <Input 
                        name='name' 
                        {...register('name')} 
                        defaultValue={`${user.name}`}
                    />
                </FormControl>
                <FormControl p='4'>
                    <FormLabel>Function</FormLabel>
                    <Input
                        name='function'
                        {...register('function')}
                        defaultValue={`${user.function}`}
                    />
                </FormControl>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    p='4'
                    mx='4'
                    mt='6'
                    w='90%'
                    colorScheme='blue'
                    variant='solid'
                >
                    Update
                </Button>
            </Flex>
            <Flex w={"100%"}>
                <Text mt='5' mb='5' fontWeight={'bold'} fontSize={'xl'}>Contacts:</Text>
            </Flex>
            <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
                {user.contacts.map((contact, index)=>
                    <Flex key={index} justifyContent={"space-between"} p={"5%"} bg={"#A9BCD0"} borderRadius={"10px"} w={"100%"} mb={"10px"}>
                        <Text w={"80%"}>{contact.contact}</Text>
                        <EditContactModal contact={contact}/>
                        <DeleteIcon _hover={{cursor: 'pointer'}} onClick={() => delContact(contact.id)}/>
                    </Flex> 
                )}
            </Flex>
            <NewContactModal user={user}/>
        </>
    )
}