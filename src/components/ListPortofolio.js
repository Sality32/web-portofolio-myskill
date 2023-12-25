'use client'
import { DeleteIcon } from '@chakra-ui/icons';
import { Card, CardBody, CardHeader, Flex, IconButton, Spinner, Text } from '@chakra-ui/react';


const showFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "long"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}
const ListPortofolio = ({ data, isLoading, error, onDelete, isEditedPage=false}) => {
  
  if(isLoading) {
    return <Spinner size={{sm: 'sm', md: 'md', lg: 'lg'}} color='teal.500' key='spinnerListPortofolio'></Spinner>
  }

  if(error) {
    return <Text color="red.500" key='textErrorPortofolio'>{error.message}</Text>;
  }
  
  if(data) {
    const portofolio = data;
    
    return (
      <>
        <Text fontSize={{base: 'lg', md: 'xl'}} fontWeight='bold'>Portofolio</Text>
        <Flex gap={3} direction='column'>
          {portofolio.length === 0 ? 'Not have portofolio Data' : 
            portofolio.map((item) => (
              <Card borderRadius='1-px' shadow='xl' marginTop='5px' key={`portofolio-${item.id}`}>
                <CardHeader>
                 {isEditedPage && (
                    <Flex justifyContent='flex-end' margin='sm' >
                      <IconButton aria-label='Search database'  icon={<DeleteIcon />} onClick={() => onDelete(item.id)}/>
                    </Flex>
                 )}
                  <Text fontSize={{base: 'md', md:'lg'}} fontWeight='800'>{item.position}</Text>
                  <Text fontSize={{base: 'sm', md: 'lg'}} fontWeight='600' color='grey'>{item.companyName}</Text>
                  <Text fontSize='sm' fontWeight='200'>{showFormattedDate(item.startDate)} - {showFormattedDate(item.endDate)}</Text>
                </CardHeader>
                <CardBody>
                  {item.description} 
                </CardBody>
              </Card>   
            ))}
        </Flex>
      
      </>
    
    )
    
    
  }

}

export default ListPortofolio;