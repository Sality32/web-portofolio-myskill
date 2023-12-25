const { Box, Avatar, Spinner, Text } = require('@chakra-ui/react');

const AvatarImage = ({ data, isLoading, error}) => {

  if(isLoading) {
    return (
      
      <Box
      position="absolute"
      top={{lg: '50px',md: '50px', sm:'50px'}}
      left="50%"
      transform="translate(-50%, -50%)">
        <Spinner size={{lg:'xl', md: 'md', sm:'sm'}} color='teal.500' key='spinnerListPortofolio'></Spinner>
      </Box>
    )
    
  }

  if(error) {
    return <Text color="red.500" key='textErrorPortofolio'>{error.message}</Text>;
  }
  if(data) {
    const avatar = data.medias.filter(media => !media.isBackground);
    return (
      
      <Box
      position="absolute"
      top="200px"
      left="50%"
      transform="translate(-50%, -50%)">
        <Avatar src={avatar.length > 0 ? avatar[0].base64: ''} size={{base: 'xl'}} />
      </Box>
    )
  }
}

export default AvatarImage;