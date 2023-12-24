'use client'
import ListPortofolio from '@/components/ListPortofolio';
import Profile from '@/components/Profile';
import { Avatar, Box, Button, Card, CardBody,CardHeader,Container, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';

const fetchData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
const portofolioUrl = 'https://6586ceb3468ef171392ec700.mockapi.io/api/v1/portofolios';
const profileUrl = 'https://6586ceb3468ef171392ec700.mockapi.io/api/v1/profile';

export default function Page() {
  const { data: portofolios, error: portofolioError, isLoading: portofolioLoading, mutate: portofolioMutate } = useSWR(portofolioUrl, fetchData);
  const { data: profile, error: profileError, isLoading: profileLoading, mutate: profileMutate } = useSWR(profileUrl, fetchData);
  
  
  return (
        <Flex 
        minWidth='max-content' 
        bg='white' 
        alignItems='center'>
        <Container 
          minW='100%' 
          backgroundColor='#EDF2F7'
          height='100%'
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
                <Profile data={profile} isLoading={profileLoading} error={profileError} />
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
                  <ListPortofolio data={portofolios} isLoading={portofolioLoading} error={portofolioError}/>
                </Flex>
              </CardBody>
            </Card>
        </Box>
        </Container>
        
      </Flex>
  );
}