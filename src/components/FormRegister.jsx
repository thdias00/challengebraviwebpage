import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Flex,
    Select
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useUsers } from '../contexts/users';

export const FormRegister = () => {
    const { registerPerson } = useUsers();

    const formSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        function: yup.string().required('Function is required'),
        contact: yup.string().required('Contact is required'),
        type: yup.string().required('Type is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => {
        const request = {
            name: data.name,
            function: data.function,
            contact: {
                contact: data.contact,
                type: data.type
            }
        }
        registerPerson(request)
    };

    return (
        <Flex as={'form'} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
            <FormControl
                isInvalid={!!errors?.name?.message}
                errortext={errors?.name?.message}
                p='4'
                isRequired
            >
                <FormLabel>Name</FormLabel>
                <Input name='name' placeholder='Name' {...register('name')} />
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!!errors?.function?.message}
                errortext={errors?.function?.message}
                p='4'
                isRequired
            >
                <FormLabel>Function</FormLabel>
                <Input
                    placeholder='Function'
                    name='function'
                    {...register('function')}
                />
                <FormErrorMessage>{errors?.function?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!!errors?.contact?.message}
                errortext={errors?.contact?.message}
                p='4'
                isRequired
            >
                <FormLabel>Contact</FormLabel>
                <Input
                    placeholder='Contact'
                    name='contact'
                    {...register('contact')}
                />
                <FormErrorMessage>{errors?.contact?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!!errors?.type?.message}
                errortext={errors?.type?.message}
                isRequired
                w={"89%"}
                mt='4'
            >
                <Select placeholder={"Select type"} {...register('type')}>
                    <option value='email'>Email</option>
                    <option value='phone'>Phone</option>
                    <option value='whats'>Whats</option>
                </Select>
                <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
            </FormControl>
            <Button
                onClick={handleSubmit(onSubmit)}
                p='4'
                mx='4'
                mt='6'
                w='90%'
                colorScheme='blue'
                variant='solid'
                disabled={!!errors.name || !!errors.function}
            >
                Registered
            </Button>
        </Flex>
    )
}