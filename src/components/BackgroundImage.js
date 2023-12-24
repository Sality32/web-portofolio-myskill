import { Image, Spinner, Text } from '@chakra-ui/react';

const BackgroundImage = ({ data, isLoading, error}) => {
  
  if(isLoading) {
    return <Spinner size='xl' color='teal.500' key='spinnerListPortofolio'></Spinner>
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