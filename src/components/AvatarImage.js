const { Box, Avatar, Spinner, Text } = require('@chakra-ui/react');

const AvatarImage = ({ data, isLoading, error}) => {

  if(isLoading) {
    return <Spinner size='xl' color='teal.500' key='spinnerListPortofolio'></Spinner>
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
        <Avatar src={avatar.length > 0 ? avatar[0].base64: ''} size="xl" />
      </Box>
    )
  }
}

export default AvatarImage;