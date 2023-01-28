import { Card, Flex, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Heading, Button } from '@chakra-ui/react'

export const ItemListContainer = () => {
  return (
    <>
      <Text fontSize='3xl' textAlign='center' marginTop={5}>Lista De Productos</Text>

      <Flex align='center' gap='2' marginLeft={20}>
      <Card maxW='sm' marginLeft={10} marginTop={5}>
        <CardBody>
          <Image
            src='https://vansmx.vtexassets.com/arquivos/ids/1096511/White_HY28_1.jpg?v=638089037820330000F'
            alt='Vans old skool clasics'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Vans Old Skool Clasics</Heading>
            <Text>
              Tenis informales Vans modelo Old Skool Clasics
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $1250
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Comprar
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW='sm' marginLeft={10} marginTop={5}>
        <CardBody>
          <Image
            src='https://www.coppel.com/images/catalog/pr/8286312-1.jpg'
            alt='DC shoes'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>DC Shoes Mujer</Heading>
            <Text>
              Tenis DC Shoes para mujer
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $1000
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Comprar
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW='sm' marginLeft={10} marginTop={5}>
        <CardBody>
          <Image
            src='https://www.coppel.com/images/catalog/pr/8388432-1.jpg'
            alt='Converse Chuck Taylor'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Converse Chuck Taylor</Heading>
            <Text>
              Tenis Converse Chuck Taylor de piel para hombre
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $1250
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Comprar
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW='sm' marginLeft={10} marginTop={5}>
        <CardBody>
          <Image
            src='https://cdn.forbes.com.mx/2020/07/Air-Jordan-White-Off-640x360.jpg'
            alt='Jordan air 4 Off White'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Jordan Air 4 Off White</Heading>
            <Text>
              Tenis Jordan Air 4 colaboracion con Off White
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $2500
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Comprar
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </Flex>
    </>
  )
}
