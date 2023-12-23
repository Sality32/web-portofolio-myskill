'use client'
import { useState } from 'react';
import ProfileForm from '../../components/ProfileForm';
import { Avatar, Box, Button, Card, CardBody, CardHeader, Container, Flex, FormControl,  Image, Input, Link, Text, Textarea } from '@chakra-ui/react';
import PortofolioForm from '../../components/PortofolioForm';
const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export default function Page() {
  const [profile, setProfile] = useState(
    {
      "createdAt": "2023-12-22T23:56:20.093Z",
      "companyName": "MySkill",
      "isProfile": true,
      "name": "Yoga Subagja",
      "position": "Frontend Developer",
      "startDate": null,
      "endDate": null,
      "description": `I need to slicing design from figma to nextjs component and page,
      then i need to integrated form data with api service. 
      Fixing some bugs and update design based on the planning or requesting from designer teams.`,
      "id": "1",
      "Position": "Backend"
    });
  const [portofolio, setPortofolio] = useState([]);
  const handleSubmitProfile = (data) => {
    console.log(data);
    setProfile({ ...profile, ...data})
  }

  const handleSubmitPortofolio = (data) => {
    console.log(data);
    const portofolioId = portofolio.length+1;
    setPortofolio((prevPortofolio) => [...prevPortofolio, {id: portofolioId, ...data}])
  }
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
              <ProfileForm onSubmit={handleSubmitProfile}/>
              <PortofolioForm onSubmitted={handleSubmitPortofolio}/>
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
                  <Text fontSize='2xl' fontWeight='bold'>{profile.name}</Text>
                  <Text fontSize='md' color='grey' fontWeight='700'>{profile.position}</Text>
                  <Text fontSize='sm' fontWeight='300'>{profile.description}</Text>
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
                    { portofolio.length === 0 ? 'Not Have Data' : 
                      portofolio.map((porto) => (
                        <Card borderRadius='1-px' shadow='xl' marginTop='5px' key={porto.id}>
                          <CardHeader>
                          <Text fontSize='lg' fontWeight='600'>{porto.position}</Text>
                          <Text fontSize='md' fontWeight='600' color='grey'>{porto.companyName}</Text>
                          <Text fontSize='sm' fontWeight='200'>{showFormattedDate(porto.startDate)} - {showFormattedDate(porto.endDate)}</Text>
                          </CardHeader>
                          <CardBody>
                            {porto.description}
                          </CardBody>
                        </Card>  
                      ))
                    }
                    
                    
                    {/* <Card borderRadius='10px' shadow='xl' marginTop='5px'>
                      <CardHeader>
                      <Text fontSize='lg' fontWeight='600'>Front End Developer</Text>
                      <Text fontSize='md' fontWeight='600' color='grey'>MySkill</Text>
                      <Text fontSize='sm' fontWeight='200'>Januari 2023 - Desember 2023</Text>
                      </CardHeader>
                      <CardBody>
                        Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
                      </CardBody>
                    </Card>    */}
                  </Flex>
                </CardBody>
              </Card>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}