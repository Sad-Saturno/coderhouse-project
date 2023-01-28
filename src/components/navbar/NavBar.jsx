import { Flex, Box, Heading, Spacer, Container, Button, ButtonGroup, Stack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { CartWidget } from '../../components'
import './navbar.css'
import { categories } from '../../db/categories'

export const NavBar = () => {

    return (
        <>
            <Container className='nav-container' maxW='100%' maxH='100%' bg='gray.700' color="black">
                <Flex align='center' gap='2'>
                    <Box className='nav-components' p='2' color='white'>
                        <Heading size='md'>E-Commerce Perron</Heading>
                    </Box>
                    <Spacer />
                    <Box className='nav-components' display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Stack direction='row' spacing={4}>
                            <ButtonGroup gap='4'>
                                <Button color='white' colorScheme='whiteAlpha' variant='ghost'>
                                    Inicio
                                </Button>
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton color='white' colorScheme='whiteAlpha' variant='ghost'
                                                as={Button} rightIcon={isOpen ? <box-icon name='chevron-up' color='white' size='sm' /> : <box-icon name='chevron-down' color='white' size='sm' />} >
                                                Categorias
                                            </MenuButton>
                                            <MenuList>
                                                {
                                                    categories.map(({ id, name }) => (
                                                        <MenuItem href={`/category`} key={ id }>
                                                            { name }
                                                        </MenuItem>
                                                    ))
                                                }
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </ButtonGroup>
                        </Stack>
                    </Box>
                    <Spacer />
                    <Box className='nav-components'>
                        <CartWidget />
                    </Box>
                </Flex>
            </Container>
        </>
    )
}
