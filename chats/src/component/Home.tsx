import { Avatar, Box, Container, Divider, Flex, Text } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa";
import icons from "../assets/icons.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export interface Data {
    id: number
    name: string
    chat: Chat[]
    startDate: string
}
export interface Chat {
    id: number
    name: string
    pengirim: string
    nameChat: string
    startDate: string
}
const Home = () => {

    const [data, setData] = useState<Data[]>([])
    const handleData = async () => {
        const ress = await axios.get("http://localhost:8000/chats")
        setData(ress.data)
    }
    useEffect(() => {
        handleData()
    }, [])
    console.log("data", data)
    const chatsOne = data.map((item) => (item.chat[0]))
    console.log("chatsOne", chatsOne)
    return (
        <>
            <Container maxW="container.lg" m={5} p={5} margin='30px auto' shadow={'xl'} borderRadius={10}>
                {
                    data.map((item) => (
                        <Link to={`/chats/${item.id}`} key={item.id}>
                            <Flex justifyContent={'space-between'} gap={5} mt={5} m={5}>
                                <Box >
                                    <FaUserCircle style={{ fontSize: "40px", color: "gray" }} />
                                    <Avatar size='md' src={icons} mt={"-40px"} ml={"15px"} />
                                </Box>
                                <Flex justifyContent={"start"} flexDirection={'column'} p={2} borderRadius={10} width={"100%"}>
                                    <Flex justifyContent={"start"} gap={5}>
                                        <Text color={'blue.500'} fontWeight={'bold'}>{item.name}</Text>
                                        <Text>{item.startDate}</Text>
                                    </Flex>
                                    <Box >
                                        <Text fontWeight={'bold'}>{item.chat[0].name}</Text>
                                        <Text>{item.chat[0].nameChat}</Text>
                                    </Box>
                                    <Divider mt={5} />
                                </Flex>
                            </Flex>
                        </Link>
                    ))
                }
            </Container>
        </>
    )
}

export default Home
