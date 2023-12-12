import {
    Box, Button, Checkbox, Container, Flex, Text, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    FormControl,
    Input,
    Divider,
    PopoverBody,
} from "@chakra-ui/react"
import { SlOptions } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";
const Task = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedTwo, setIsCheckedTwo] = useState(false);
    const [isCheckedThere, setIsCheckedThere] = useState(false);


    return (
        <>
            <Container maxW="container.lg" mt={'60px'}>
                <Flex justifyContent={'space-between'} mb={'50px'}>
                    <Button bg={'#F8B76B'} color={'white'}><Link to={'/'}>My Chats</Link></Button>
                    <Button bg={'#2F80ED'} color={'white'}>New Task</Button>
                </Flex>
                <Flex width={'100%'} mt={5} >
                    <Box width={'5%'} pl={2} pt={'2px'}>
                        <Checkbox textAlign={'center'} defaultChecked isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}></Checkbox>
                    </Box>
                    <Box width={'65%'}>
                        <Text textDecoration={isChecked ? 'line-through' : 'none'}>
                            Cross-reference with Jeanne for Case 
                        </Text>
                    </Box>
                    <Flex width={'30%'} justifyContent={'space-between'}>
                        <Text color={'red.500'}>2 Days Left</Text>
                        <Text>12/06/2021</Text>
                        <Popover placement='bottom'>
                            <PopoverTrigger>
                                <Button bg={'transparent'}><IoIosArrowDown /></Button>
                            </PopoverTrigger>
                            <Portal >
                                <PopoverContent w={'950px'}
                                    style={{ marginLeft: '-820px' }} // Sesuaikan nilai ini sesuai dengan kebutuhan Anda
                                >
                                    <PopoverArrow />
                                    <Box p={2}>
                                        <FormControl p={5} display={'flex'} justifyContent={'start'} gap={5}>
                                            <Text p={2}><FaRegClock style={{ fontSize: '18px', color: 'red' }} /></Text>
                                            <Input type='date' width={'200px'} />
                                        </FormControl>
                                        <Flex justifyContent={'start'} gap={8} my={5} mx={5} pl={2}>
                                            <Text>
                                                <LuPencil style={{ color: 'blue' }} />
                                            </Text>
                                            <Text>
                                                No Description
                                            </Text>
                                        </Flex>
                                    </Box>
                                    <PopoverCloseButton />
                                </PopoverContent>
                            </Portal>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <Button bg={'transparent'}>                            
                                    <SlOptions />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent w={'100px'}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>Delete</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>
                <Divider w={'990px'} margin={'auto'} mt={9} />

                <Flex width={'100%'} mt={5} >
                    <Box width={'5%'} pl={2} pt={'2px'}>
                        <Checkbox textAlign={'center'} defaultChecked isChecked={isCheckedTwo} onChange={() => setIsCheckedTwo(!isCheckedTwo)}></Checkbox>
                    </Box>
                    <Box width={'65%'}>
                        <Text textDecoration={isCheckedTwo ? 'line-through' : 'none'}>
                        Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203
                        </Text>
                    </Box>
                    <Flex width={'30%'} justifyContent={'space-between'}>
                        <Text color={'red.500'}>12 Days Left</Text>
                        <Text>09/08/2022</Text>
                        <Popover placement='bottom'>
                            <PopoverTrigger>
                                <Button bg={'transparent'}><IoIosArrowDown /></Button>
                            </PopoverTrigger>
                            <Portal >
                                <PopoverContent w={'950px'}
                                    style={{ marginLeft: '-820px' }} // Sesuaikan nilai ini sesuai dengan kebutuhan Anda
                                >
                                    <PopoverArrow />
                                    <Box p={2}>
                                        <FormControl p={5} display={'flex'} justifyContent={'start'} gap={5}>
                                            <Text p={2}><FaRegClock style={{ fontSize: '18px', color: 'red' }} /></Text>
                                            <Input type='date' width={'200px'} />
                                        </FormControl>
                                        <Flex justifyContent={'start'} gap={8} mx={5} my={5} pl={2}>
                                            <Text>
                                                <LuPencil style={{ color: 'blue' }} />
                                            </Text>
                                            <Text>
                                                Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.
                                            </Text>
                                        </Flex>
                                    </Box>
                                    <PopoverCloseButton />
                                </PopoverContent>
                            </Portal>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <Button bg={'transparent'}>                            
                                    <SlOptions />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent w={'100px'}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>Delete</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>
                <Divider w={'990px'} margin={'auto'} mt={9} />


                <Flex width={'100%'} mt={5} >
                    <Box width={'5%'} pl={2} pt={'2px'}>
                        <Checkbox textAlign={'center'} defaultChecked isChecked={isCheckedThere} onChange={() => setIsCheckedThere(!isCheckedThere)}></Checkbox>
                    </Box>
                    <Box width={'65%'}>
                        <Text textDecoration={isCheckedThere ? 'line-through' : 'none'}>
                        Set up appointment with Dr Blake
                        </Text>
                    </Box>
                    <Flex width={'30%'} justifyContent={'space-between'}>
                        <Text color={'red.500'}>12 Days Left</Text>
                        <Text>09/08/2022</Text>
                        <Popover placement='bottom'>
                            <PopoverTrigger>
                                <Button bg={'transparent'}><IoIosArrowDown /></Button>
                            </PopoverTrigger>
                            <Portal >
                                <PopoverContent w={'950px'}
                                    style={{ marginLeft: '-820px' }} // Sesuaikan nilai ini sesuai dengan kebutuhan Anda
                                >
                                    <PopoverArrow />
                                    <Box p={2}>
                                        <FormControl p={5} display={'flex'} justifyContent={'start'} gap={5}>
                                            <Text p={2}><FaRegClock style={{ fontSize: '18px', color: 'red' }} /></Text>
                                            <Input type='date' width={'200px'} />
                                        </FormControl>
                                        <Flex justifyContent={'start'} gap={8} mx={5} my={5} pl={2}>
                                            <Text>
                                                <LuPencil style={{ color: 'blue' }} />
                                            </Text>
                                            <Text>
                                            All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.
                                            </Text>
                                        </Flex>
                                    </Box>
                                    <PopoverCloseButton />
                                </PopoverContent>
                            </Portal>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <Button bg={'transparent'}>                            
                                    <SlOptions />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent w={'100px'}>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>Delete</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                </Flex>
                <Divider w={'990px'} margin={'auto'} mt={9} />

            </Container>
        </>
    )
}

export default Task
