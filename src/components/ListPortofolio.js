'use client'
import { DeleteIcon } from '@chakra-ui/icons';
import { Card, CardBody, CardHeader, Flex, IconButton, Spinner, Text } from '@chakra-ui/react';


const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}
const ListPortofolio = ({ data, isLoading, error, onDelete}) => {
  
  if(isLoading) {
    return <Spinner size='xl' color='teal.500' key='spinnerListPortofolio'></Spinner>
  }

  if(error) {
    return <Text color="red.500" key='textErrorPortofolio'>{error.message}</Text>;
  }
  
  if(data) {
    const portofolio = data;
    
    return (
      <>
      {portofolio.length === 0 ? 'Not have portofolio Data' : 
        portofolio.map((item) => (
          <Card borderRadius='1-px' shadow='xl' marginTop='5px' key={`portofolio-${item.id}`}>
            
            <CardHeader>
              <Flex justifyContent='flex-end' margin='sm' >
                <IconButton aria-label='Search database'  icon={<DeleteIcon />} onClick={() => onDelete(item.id)}/>
              </Flex>
              <Text fontSize='lg' fontWeight='600'>{item.position}</Text>
              <Text fontSize='md' fontWeight='600' color='grey'>{item.companyName}</Text>
              <Text fontSize='sm' fontWeight='200'>{showFormattedDate(item.startDate)} - {showFormattedDate(item.endDate)}</Text>
            </CardHeader>
            <CardBody>
              {item.description} 
            </CardBody>
          </Card>   
        ))}
      </>
    
    )
    
    
  }

}

export default ListPortofolio;