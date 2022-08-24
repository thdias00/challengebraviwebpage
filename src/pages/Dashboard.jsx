import { Flex, Image, Text } from "@chakra-ui/react";
import { MainModal } from "../components/Modal";
import BraviLogo from "../assets/BraviLogo.svg";
import { useUsers } from "../contexts/users";
import Avatar1 from "../assets/Avatar/avatar-svgrepo-com.svg";
import Avatar2 from "../assets/Avatar/avatar-svgrepo-com2.svg";
import Avatar3 from "../assets/Avatar/avatar-svgrepo-com3.svg";
import Avatar4 from "../assets/Avatar/avatar-svgrepo-com4.svg";
import Avatar5 from "../assets/Avatar/avatar-svgrepo-com5.svg";
import Avatar6 from "../assets/Avatar/avatar-svgrepo-com6.svg";
import { RegisterModal } from "../components/RegisterModal";
import { EditPersonModal } from "../components/EditPersonModal";
import { DeleteIcon } from "@chakra-ui/icons";

const Dashboard = () => {
    const {users, deletePerson} = useUsers()

    const avatar = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6]

    const deleteUser = (id) => {
        deletePerson(id)
    }

    return(
        <>
            <MainModal/>
            {users.length > 0 ? 
                <Flex flexDir={"column"} w={"100vw"} h={"100vh"}>
                    <Flex h={"80px"} alignItems={"center"} justifyContent={"center"} bg={"blue"}>
                        <Image src={BraviLogo} alt={"BraviLogo"} boxSize={"60px"} borderRadius={"20px"} ml={"15px"}/>
                    </Flex>
                    <Flex flexDir={["column", "column", "row", "row"]} w={"100vw"} h={"89%"}>
                        <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} textAlign={"center"} p={"10%"} bg={"#A9BCD0"} borderRadius={"10px"} maxH={["auto", "auto", "40%", "40%"]} m={"5%"}>
                            <Text fontWeight={"bold"} color={"#1b1b1e"}>Total people registered: {users.length}</Text>
                            <RegisterModal/>
                        </Flex>
                        <Flex flexDir={["column", "column", "column", "row"]} flexWrap={["nowrap", "nowrap", "nowrap", "wrap"]} alignContent={["inherit", "inherit","inherit", "flex-start"]} alignItems={["center", "center", "center", "flex-start"]} justifyContent={["flex-start", "flex-start", "flex-start", "center"]} w={["auto", "auto", "100%", "100%"]} m={"5%"} h={"100%"} overflow={"auto"}>
                            {users.map((user, index) => 
                                <Flex key={index} p={"5%"} bg={"#A9BCD0"} borderRadius={"10px"} w={["100%", "100%", "100%", "40%"]} h={"150px"} m={"10px"}>
                                    <Flex w={"30%"}>
                                        <Image src={`${avatar[Math.floor(Math.random() * 5) + 1]}`} alt="Avatar" w={"100%"} h={"100%"} borderRadius={"full"}/>
                                    </Flex>
                                    <Flex flexDir={"column"} justifyContent={"center"} m={"5%"} w={"50%"}>
                                        <Text fontWeight={"bold"} color={"#1b1b1e"} fontSize={"sm"}>{user.name}</Text>
                                        <Text fontWeight={"bold"} color={"#1b1b1e"} fontSize={"xs"}>{user.function}</Text>
                                    </Flex>
                                    <Flex justifyContent={"space-between"} margin={"auto"} w={"20%"} textAlign={"center"}>
                                        <EditPersonModal user={user}/>
                                        <DeleteIcon _hover={{cursor: 'pointer'}} onClick={() => deleteUser(user.id)}/>
                                    </Flex>
                                </Flex>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            :
                <Flex flexDir={"column"} w={"100vw"} h={"100vh"}>
                    <Flex h={"80px"} alignItems={"center"} justifyContent={"center"} bg={"blue"}>
                        <Image src={BraviLogo} alt={"BraviLogo"} boxSize={"60px"} borderRadius={"20px"} ml={"15px"}/>
                    </Flex>
                    <Flex w={["auto", "auto", "45%", "45%"]}flexDir={"column"} alignItems={"center"} justifyContent={"center"} p={["10%", "10%","5%", "5%"]} bg={"#A9BCD0"} borderRadius={"10px"} m={["5%", "5%", "2.5%", "2.5%"]}>
                        <RegisterModal/>
                    </Flex>            
                </Flex>
            }
        </>
    )
}

export default Dashboard;