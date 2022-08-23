import { UserProvider } from "./users";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({children}) => {
    return(
        <ChakraProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </ChakraProvider>
    )
}

export default Providers;