import { Avatar, Box, Button, Card, CardBody, CardHeader, Center, Container, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function Page() {
  return (
    <Flex 
      minWidth='max-content' 
      bg='#EDF2F7' 
      alignItems='center'>
      <Container 
        minW='100%' 
        bg='#EDF2F7'
        padding='2rem'
        display='flex'
        justifyContent="center"
        alignItems="center"> 
       <Box 
          width='4xl'
          bg='#EDF2F7'
          boxShadow='base'
          borderRadius='15px'>
          <Card  
            maxW='4xl'
            borderRadius='15px'
            position='relative'>
            <Box
              position="absolute"
              top="200px"
              left="50%"
              transform="translate(-50%, -50%)">
              <Avatar src='https://bit.ly/dan-abramov' size="xl" />
            </Box>
            <Image borderRadius='15px 15px 0 0' objectFit='cover' h='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' marginBottom='1.5rem' />
            <CardHeader textAlign='center' alignSelf='center' width='80%' marginTop='0'>
              <Text fontSize='2xl' fontWeight='bold'>Header</Text>
              <Text fontSize='md' color='grey' fontWeight='700'>Header 2</Text>
              <Text fontSize='sm' fontWeight='300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </CardHeader>
            <CardBody marginStart='20px'>
              <Box display='flex' justifyContent='flex-end' marginEnd='10px'>
                <Link href='/edit'>
                  <Button colorScheme="green" variant='outline'>
                    Edit
                  </Button>
                </Link>
                
              </Box>
              <Text fontSize='xl' fontWeight='bold'>Portofolio</Text>
              <Flex gap={3} direction='column'>
                <Card borderRadius='1-px' shadow='xl' marginTop='5px'>
                  <CardHeader>
                  <Text fontSize='lg' fontWeight='600'>Front End Developer</Text>
                  <Text fontSize='md' fontWeight='600' color='grey'>MySkill</Text>
                  <Text fontSize='sm' fontWeight='200'>Januari 2023 - Desember 2023</Text>
                  </CardHeader>
                  <CardBody>
                    Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </CardBody>
                </Card>   
                <Card borderRadius='10px' shadow='xl' marginTop='5px'>
                  <CardHeader>
                  <Text fontSize='lg' fontWeight='600'>Front End Developer</Text>
                  <Text fontSize='md' fontWeight='600' color='grey'>MySkill</Text>
                  <Text fontSize='sm' fontWeight='200'>Januari 2023 - Desember 2023</Text>
                  </CardHeader>
                  <CardBody>
                    Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                  </CardBody>
                </Card>   
              </Flex>
            </CardBody>
          </Card>
       </Box>
      </Container>
      
    </Flex>
  );
}