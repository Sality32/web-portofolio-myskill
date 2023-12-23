import { Avatar, Box, Button, Card, CardBody, CardHeader, Center, Container, Flex, FormControl, FormLabel, Image, Input, Link, Spacer, Stack, Text, Textarea } from '@chakra-ui/react';
import React from 'react';

export default function Page() {
  return (
    <Flex 
      minWidth='max-content' 
      bg='#EDF2F7' 
      alignItems='center'
      direction='column'>
      <Container 
        minW='max-content' 
        bg='#EDF2F7'
        padding='0.5rem'> 
        <Box marginBottom='20px'>
          <Link href='/'>
            <Button colorScheme="green" >
              Kembali
            </Button>
          </Link>
        </Box>
        <Flex gap={5} justifyContent='center'>
          <Box 
            bg='#EDF2F7'
            borderRadius='15px'
            height='max-content'>
            <Flex gap={3} direction='column' w='2xl'>
              <Card shadow='xl'>
                <FormControl>
                  <Input type='file' />
                </FormControl>
              </Card>
              <Card shadow='xl'>
                <FormControl>
                  <Input type='file' />
                </FormControl>
              </Card>
              <Card shadow='xl'>
                <CardHeader>
                  <Text fontSize='md' fontWeight='bold' textDecoration='underline'>Profile</Text>
                </CardHeader>
                <CardBody>
                  <FormControl>
                    <Flex gap={3} direction='column'>
                      <Input variant='outline' placeholder='Outline' textDecoration='underline'/>
                      <Input variant='outline' placeholder='Outline' textDecoration='underline'/>
                      <Textarea variant='outline' placeholder='Outline' textDecoration='underline' resize='none'/>
                      <Button>Add</Button>
                    </Flex>
                  </FormControl>
                </CardBody>
              </Card>
              <Card shadow='xl'>
              <CardHeader>
                  <Text fontSize='md' fontWeight='bold' textDecoration='underline'>Portofolio</Text>
                </CardHeader>
                <CardBody>
                  <FormControl>
                    <Flex gap={3} direction='column'>
                      <Input variant='outline' placeholder='Outline' textDecoration='underline'/>
                      <Input variant='outline' placeholder='Outline' textDecoration='underline'/>
                      <Input variant='outline' placeholder='Outline' textDecoration='underline'/>
                      <Flex gap={5}>
                        
                        <Input variant='outline' type='date' placeholder='Outline' textDecoration='underline'/>
                        
                        <Input variant='outline' type='date' placeholder='Outline' textDecoration='underline'/>
                      </Flex>
                      <Textarea variant='outline' placeholder='Outline' textDecoration='underline' resize='none'/>
                      <Button>Add</Button>
                    </Flex>
                    
                  </FormControl>
                </CardBody>
              </Card>
            </Flex>
          </Box>
          <Box 
              bg='#EDF2F7'
              borderRadius='15px'>
              <Card  
                w='2xl'
                borderRadius='15px'
                position='relative'
                shadow='xl'>
                <Box
                  position="absolute"
                  top="200px"
                  left="50%"
                  transform="translate(-50%, -50%)">
                  <Avatar src='https://bit.ly/dan-abramov' size="xl" />
                </Box>
                <Image borderRadius='15px 15px 0 0' objectFit='cover' h='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' marginBottom='1.5rem' />
                <CardHeader textAlign='center' alignSelf='center' width='80%' marginTop='0'>
                  <Text fontSize='2xl' fontWeight='bold'>THIS IS EDIT</Text>
                  <Text fontSize='md' color='grey' fontWeight='700'>Header 2</Text>
                  <Text fontSize='sm' fontWeight='300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </CardHeader>
                <CardBody marginStart='20px'>
                  <Box display='flex' justifyContent='flex-end' marginEnd='10px'>
                    <Link href='https://google.com' isExternal>
                      <Button colorScheme="green" variant='outline'>
                        Save
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
        </Flex>
      </Container>
    </Flex>
  );
}