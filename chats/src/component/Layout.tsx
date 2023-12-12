import { Container, Flex, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { GrTasks } from "react-icons/gr";
const Layout = () => {
  return (
    <>
      <Container maxW="container.2xl">
        <Flex justifyContent={'end'} position={'fixed'} bottom={'70px'} right={'100px'}>
          <Flex justifyContent={'center'} gap={3}>
            <Text bg={'#F8B76B'} borderRadius={'50%'} p={2}>
              <Link to={'/task'}>
                <GrTasks style={{ fontSize: '35px', padding: '5px', color: 'white' }} />
              </Link>
            </Text>
            <Link to={'/'}>
              <Text bg={'blue.400'} borderRadius={'50%'} p={2}>
                <HiMiniChatBubbleLeftRight style={{ fontSize: '35px', padding: '5px', color: 'white' }} />
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container >
      <Outlet />
    </>
  )
}

export default Layout
