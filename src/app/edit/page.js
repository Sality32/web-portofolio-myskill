'use client'
import ProfileForm from '../../components/ProfileForm';
import { Box, Button, Card, CardBody, CardHeader, Container, Flex, Link, Text } from '@chakra-ui/react';
import PortofolioForm from '../../components/PortofolioForm';
import Profile from '@/components/Profile';
import useSWR from 'swr';
import ListPortofolio from '@/components/ListPortofolio';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Error from 'next/error';
import AvatarImage from '@/components/AvatarImage';
import BackgroundImage from '@/components/BackgroundImage';
import FileUpload from '@/components/FileUpload';
const fetchData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const storeOrUpdateProfile = async(url, bodyData, isExist) => {
  try {
    if (isExist) {
      await fetch(url+`/${bodyData[0].id}`, {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData[0])
      });
     
    }else {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData[0])
      });
    }
  
  } catch (error) {
    throw new Error(error.message); 
  }
}

const deletePortofolio = async(url, ids) => {
  try {
    await Promise.all(ids.map( async id => {
      await fetch(url+`/${id}`, { method: 'DELETE' });
      return id;
    }))
    
  } catch (error) {
    throw new Error(error.message);
  }
}
const addPortofolio = async(url, data) => {
  try {
    await Promise.all(data.map( async porto => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(porto),
        });
        const jsonRespon = await response.json();
        return jsonRespon;
      } catch (error) {
        return error.message;
      }
    }));
  } catch (error) {
    throw new Error(error.message);
  }
}

const updateMedia = async(url, data) => {
  try {
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    throw new Error(error.message);
  }
}
const portofolioUrl = 'https://6586ceb3468ef171392ec700.mockapi.io/api/v1/portofolios';
const profileUrl = 'https://6586ceb3468ef171392ec700.mockapi.io/api/v1/profile';
const mediaUrl = '/api/media';

export default function Page() {
  
  const router = useRouter();
  const { data: portofolios, error: portofolioError, isLoading: portofolioLoading, mutate: portofolioMutate } = useSWR(portofolioUrl, fetchData);
  const { data: profile, error: profileError, isLoading: profileLoading, mutate: profileMutate } = useSWR(profileUrl, fetchData);
  const { data: medias, error: mediaError, isLoading: mediaLoading, mutate: mediaMutate} = useSWR(mediaUrl, fetchData);

  const [deletedPortofolio, setDeletePortofolio] = useState([]);
  const [addedPortofolio, setAddPortofolio] = useState([]);
  const [isUpdatedProfile, setUpdatingProfile] = useState(false);
  const [isUpdateBackground, setUpdatingBackground] = useState(false);
  const [isUpdateAvatar, setUpdatingAvatar] = useState(false);

  const handleEditProfile = (newData) => {
    const newProfile = {
      id: 1,
      name: newData.name,
      position: newData.position,
      description: newData.description
    }
    const tempProfile = profile.length > 0 ? {...profile[0], ...newProfile}: newProfile;
    
    if (profile.length > 0) {
      setUpdatingProfile(profile.length > 0);
    }
    profileMutate( [tempProfile], false )
  }

  const handleEditPortofolio = (newData) => {
    const lastId = portofolios.length > 0 ? portofolios.sort((a,b) => b.id-a.id)[0].id : 0;
    const newPortofolio = {
      companyName: newData.companyName,
      startDate: newData.startDate,
      endDate: newData.endDate,
      description: newData.description,
      id: parseInt(lastId, 10) +1
    }
    setAddPortofolio((prevState) => [...prevState, {...newPortofolio}])
    portofolioMutate([...portofolios, {...newPortofolio}], false)
  }

  const handleDeletePortofolio = (portofolioId) => {
    const isLocalData = addedPortofolio.filter((item) => item.id === portofolioId);
    const removedData = portofolios.filter((item) => item.id !== portofolioId);
    if (isLocalData.length === 0 ) {
      setDeletePortofolio((prevState) => [...prevState, portofolioId]);
    }else {
      const newAddedPortofolio = addedPortofolio.filter((item) => item.id !== portofolioId);
      setAddPortofolio(newAddedPortofolio);
    }
    portofolioMutate([...removedData], false)
  }

  const handleSubmitted = async () => {
    try {
      if (profile.length>0) {
        await storeOrUpdateProfile(profileUrl, profile, isUpdatedProfile)
      }
      if (deletedPortofolio.length > 0 ){
        await deletePortofolio(portofolioUrl, deletedPortofolio);
      }
      if (addedPortofolio.length > 0) {
        await addPortofolio(portofolioUrl, addedPortofolio);
      }
      if(isUpdateAvatar) {
        const avatar = medias.medias.filter((media) => !media.isBackground);
        await updateMedia(mediaUrl, avatar[0])
      }
      if(isUpdateBackground) {
        const background = medias.medias.filter((media) => media.isBackground);
        await updateMedia(mediaUrl, background[0]);
      }
      router.push('/') 
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const handleChangeBackgroundImage = async (base64) => {
    const background = medias.medias.filter(image => image.isBackground);
    if(background.length > 0) {
      const otherMedia = medias.medias.filter(image => !image.isBackground);
      const data = {
        medias:  [...otherMedia, {...background[0], base64}]
      }
      setUpdatingBackground(true);
      mediaMutate(data, false)
    }
    
  }

  const handleChangeAvatarImage = (base64) => {
    const avatar = medias.medias.filter(image => !image.isBackground);
    if(avatar.length > 0) {
      const otherMedia = medias.medias.filter(image => image.isBackground);
      const data = {
        medias:  [...otherMedia, {...avatar[0], base64}]
      }
      setUpdatingAvatar(true);
      mediaMutate(data, false)
    }
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
        <Flex gap={5} justifyContent='center'>
          <Box 
            bg='#EDF2F7'
            borderRadius='15px'
            height='max-content'>

            {/* Form Card */}
            <Flex gap={3} direction='column' w='2xl'>
              <FileUpload title='Background Image' onChange={handleChangeBackgroundImage}/>
              <FileUpload title='Avatar Image' onChange={handleChangeAvatarImage}/>
              <ProfileForm onSubmit={handleEditProfile}/>
              <PortofolioForm onSubmitted={handleEditPortofolio}/>
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
                <AvatarImage data={medias} isLoading={mediaLoading} error={mediaError}/>
                <BackgroundImage data={medias} isLoading={mediaLoading} error={mediaError}/>
                <CardHeader textAlign='center' alignSelf='center' width='80%' marginTop='0'>
                  <Profile data={profile} isLoading={profileLoading} error={profileError}/>
                </CardHeader>
                <CardBody marginStart='20px'>
                  <Flex gap={4} justifyContent='flex-end' marginEnd='10px'>
                    <Link href='/'>
                      <Button colorScheme="green" >
                        Kembali
                      </Button>
                    </Link>
                    <Button colorScheme="green" variant='outline' onClick={handleSubmitted}>
                      Save
                    </Button>
                  </Flex>
                  <Text fontSize='xl' fontWeight='bold'>Portofolio</Text>
                  <Flex gap={3} direction='column'>
                    <ListPortofolio data={portofolios} isLoading={portofolioLoading} error={portofolioError} onDelete={handleDeletePortofolio} />
                  </Flex>
                </CardBody>
              </Card>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}