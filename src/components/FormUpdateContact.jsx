import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Select
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useUsers } from '../contexts/users';

export const FormUpdateContact = (contact) => {
    contact = contact.contact

    const { updateContact } = useUsers();

    const formSchema = yup.object().shape({
        contact: yup.string(),
        type: yup.string()
    });

    const {
        register,
        handleSubmit
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => {
        const request = {
            contact: data.contact,
            type: data.type,
        }
        updateContact(request, contact.id)
    };

    return (
        <>
            <Flex as={'form'} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                <FormControl p='4'>
                    <FormLabel>Contact</FormLabel>
                    <Input 
                        name='contact' 
                        {...register('contact')} 
                        defaultValue={`${contact.contact}`}
                    />
                </FormControl>
                <FormControl mt='4'>
                    <Select 
                        {...register('type')}
                        defaultValue={`${contact.type}`}
                    >
                        <option value='email'>Email</option>
                        <option value='phone'>Phone</option>
                        <option value='whats'>Whats</option>
                    </Select>
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
        </>
    )
}