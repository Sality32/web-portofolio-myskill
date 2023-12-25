import { Box, Spinner, Text } from '@chakra-ui/react';

const Profile = ({ data, isLoading, error}) => {

  if(isLoading) {
    return (
      <Box
      position="absolute"
      top={{lg: '80px', sm:'70px'}}
      left="50%"
      transform="translate(-50%, -50%)">
        <Spinner size={{lg: 'xl', sm:'sm'}} color='teal.500' key='spinnerListPortofolio'></Spinner>
      </Box>
    )
  }

  if(error) {
    return <Text color="red.500" key='textErrorPortofolio'>{error.message}</Text>;
  }
  if(data){
    return ( 
    <>
      {data.length !== 0 ? 
        <>
          <Text fontSize={{base: 'lg', md: '2xl', lg:'2xl'}} fontWeight='bold'>{data[0].name}</Text>
          <Text fontSize={{base: 'sm', md: 'md'}} color='grey' fontWeight='700'>{data[0].position}</Text>
          <Text fontSize='sm' fontWeight='300'>{data[0].description}</Text>
        </>: 
        <Text fontSize='xl' fontWeight='700'>Profile Not found</Text>}
    </>
   ) 
  }
 
}

export default Profile;