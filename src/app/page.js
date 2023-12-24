'use client'
import AvatarImage from '@/components/AvatarImage';
import BackgroundImage from '@/components/BackgroundImage';
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
const mediaUrl = '/api/media';

export default function Page() {
  const { data: portofolios, error: portofolioError, isLoading: portofolioLoading } = useSWR(portofolioUrl, fetchData);
  const { data: profile, error: profileError, isLoading: profileLoading } = useSWR(profileUrl, fetchData);
  const { data: medias, error: mediaError, isLoading: mediaLoading} = useSWR(mediaUrl, fetchData);
  
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
              <AvatarImage data={medias} isLoading={mediaLoading} error={mediaError}/>
              <BackgroundImage data={medias} isLoading={mediaLoading} error={mediaError} />
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