/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Container, Divider, Flex, Input,  Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton, Text, Portal } from "@chakra-ui/react"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { SlOptions } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { Data } from "./Home";


const Chats = () => {
    const { id } = useParams()
    const [chat, setChat] = useState<Data>({} as Data)
    const handleChats = async () => {
        const ress = await axios.get(`http://localhost:8000/chats/${id}`)
        setChat(ress.data)
    }
    useEffect(() => {
        handleChats()
    }, [])

    console.log("chat", chat)
    return (
        <>
            <Container maxW="container.lg"  >
                <Flex justifyContent={'space-between'} pos={'sticky'} height={'100px'} top={0} bg={'white'}  >
                    <Flex justifyContent={'start'} gap={8} mt={9}>
                        <Link to={'/'}>
                            <Text ><IoIosArrowRoundBack style={{ fontSize: '25px' }} /></Text>
                        </Link>
                        <Box justifyContent={'start'} >
                            <Text fontWeight={'bold'} color={'blue.500'}>I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</Text>
                            <Text fontSize={'9px'}>3 Participants</Text>
                        </Box>
                    </Flex>
                    <Link to={'/'} >
                        <Text mt={9} mx={5} align={'right'}><IoMdClose style={{ fontSize: '25px' }} /></Text>
                    </Link>
                </Flex>
                <Divider mt={3} color={'black'} />

                {Array.isArray(chat.chat) && chat.chat.map((item) => (
                    <Box key={item.id} mt={5} p={2} ml={item.pengirim === 'bot' ? 0 : 'auto'}>
                        <Text textAlign={item.pengirim === 'bot' ? 'left' : 'right'}>{item.pengirim === 'user' ? 'You' : `${item.name}`}</Text>
                        <Flex justifyContent={item.pengirim === 'bot' ? 'start' : 'end'} gap={5}>
                            {item.pengirim === 'user' && 
                            <Popover >
                            <PopoverTrigger>
                              <Button bg={'transparent'}><SlOptions/></Button>
                            </PopoverTrigger>
                            <Portal >
                              <PopoverContent w={'100px'}>
                                <PopoverArrow />
                                <PopoverHeader>Edit</PopoverHeader>
                                <PopoverHeader>Delete</PopoverHeader>
                                <PopoverCloseButton />
                              </PopoverContent>
                            </Portal>
                          </Popover>
                            
                            }
                            <Box maxW={'70%'} display={'flex'} p={2} borderRadius={4} flexDirection={'column'} bg={item.pengirim === 'user' ? 'gray.50' : 'pink.50'}>
                                <Text p={2} borderRadius={4}>
                                    {item.nameChat}
                                </Text>
                                <Text>{item.startDate}</Text>
                            </Box>
                            {/* {item.pengirim === 'bot' && <Text><SlOptions /></Text>} */}
                        </Flex>
                    </Box>
                ))}



                <Box my={5} p={5} width={'100%'} position={'sticky'} bg={'white'} bottom={0} height={'100px'} px={8}>
                    <form>
                        <Flex gap={5}>
                            <Input placeholder='Type a message' size='lg' />
                            <Button type="submit" px={6} bg={'blue.500'} color={'white'}>
                                Send
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default Chats
