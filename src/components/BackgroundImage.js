import { Box, Image, Spinner, Text } from '@chakra-ui/react';

const BackgroundImage = ({ data, isLoading, error}) => {
  
  if(isLoading) {
    return(
      <Box
      position="absolute"
      top={{base: '10', sm:'10px'}}
      left="50%"
      transform="translate(-50%, -50%)">
        <Spinner size={{lg: 'xl', sm:'sm'}} color='teal.500' key='spinnerListPortofolio'></Spinner>
      </Box>
    ) 
  }

  if(error) {
    return <Text color="red.500" key='textErrorPortofolio'>{error.message}</Text>;
  }
  if(data) {
    const background = data.medias.filter(media => media.isBackground)[0];
    return (
      <Image borderRadius='15px 15px 0 0' objectFit='cover' h='200px' src={background.base64} alt='Dan Abramov' marginBottom='1.5rem' />
             
    )
  }
}

export default BackgroundImage;