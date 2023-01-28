import { useRef } from 'react';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from '@chakra-ui/react';

export const CartWidget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} variant='ghost' colorScheme='whiteAlpha' onClick={onOpen}>
        <box-icon name='cart' color='white' />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
        bg='gray.700'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign='center'>Tu Carrito de Compras</DrawerHeader>
          <DrawerBody>

          </DrawerBody>
          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
