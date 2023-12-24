import { Spinner, Text } from '@chakra-ui/react';

const Profile = ({ data, isLoading, error}) => {

  if(isLoading) {
    return <Spinner size='xl' color='teal.500' key='spinnerListPortofolio'></Spinner>
  }

  if(error) {
    return <Text color="red.500" key='textErrorPortofolio'>{error.message}</Text>;
  }
  if(data){
    return ( 
    <>
      {data.length !== 0 ? 
        <>
          <Text fontSize='2xl' fontWeight='bold'>{data[0].name}</Text>
          <Text fontSize='md' color='grey' fontWeight='700'>{data[0].position}</Text>
          <Text fontSize='sm' fontWeight='300'>{data[0].description}</Text>
        </>: 
        <Text fontSize='xl' fontWeight='700'>Profile Not found</Text>}
    </>
   ) 
  }
 
}

export default Profile;