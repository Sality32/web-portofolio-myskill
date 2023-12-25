'use client'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Card, CardHeader, Text, CardBody, FormControl, Flex, Input, Textarea, Button, VStack, FormErrorMessage, textDecoration, InputGroup, InputLeftAddon } from '@chakra-ui/react';

const PortofolioForm = ({ onSubmitted }) => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: async (data) => {
      try {
        const validateSchema = Yup.object({
          companyName: Yup.string().max(100, 'Maximum character is 100').required('CompanyName Field is Required'),
          position: Yup.string().required('Position field is Required'),
          description: Yup.string().required('Description field is Required').min(50, 'Must be at least 50 character'),
          startDate: Yup.date().required('Start Date Required'),
          endDate: Yup.date().when('startDate', (startDate, validateSchema ) => startDate && validateSchema.min(startDate)),
        });
        await validateSchema.validate(data, {abortEarly: false});
        return { values: data, errors: {}}
      } catch (error) {
        console.log(error); 
        return { values: {}, errors: error.inner.reduce((acc, e) => ({ ...acc, [e.path]: e.message}), {})};
      }
    },
  });

  const handleFormSubmit = ( data) => {
    onSubmitted(data);
  }
  return (
    <Card shadow='xl' maxWidth={{"2xl": '2xl', xl: 'xl', lg:'xl', md:'xl',sm: "md",  base:'sm'}}>
        <CardHeader>
          <Text fontSize='md' fontWeight='bold' textDecoration='underline'>Portofolio</Text>
        </CardHeader>
        <CardBody>
          <Flex gap={6} direction='column'>
            <VStack as='form' onSubmit={handleSubmit(handleFormSubmit)}>
              <FormControl isInvalid={!!errors.companyName} >  
                <Input variant='outline' placeholder='Company Name' {...register('companyName')} _placeholder={{textDecoration: 'underline'}}/>
                <FormErrorMessage>{errors.companyName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.position}>
                <Input variant='outline' placeholder='Position' {...register('position')}  _placeholder={{textDecoration: 'underline'}} />
                <FormErrorMessage>{errors.position}</FormErrorMessage>
              </FormControl>
              <Flex gap={2} width='100%' direction={{"2xl": 'row', xl:'column', lg:'column', md:'column', sm:'column', base: "column", }}>
                <FormControl isInvalid={!!errors.startDate}>
                  <InputGroup>
                    <InputLeftAddon>Start Date</InputLeftAddon>
                   <Input variant='outline' type='date' {...register('startDate')} />
                   <FormErrorMessage>{errors.startDate}</FormErrorMessage>
                  </InputGroup>
                  
                </FormControl>
                <FormControl isInvalid={!!errors.endDate}>
                  <InputGroup>
                    <InputLeftAddon>End Date</InputLeftAddon>
                    <Input variant='outline' type='date'  {...register('endDate')} /> 
                    <FormErrorMessage>{errors.endDate}</FormErrorMessage>
                  </InputGroup>
                  
                </FormControl>
                        
              </Flex>
              <FormControl isInvalid={!!errors.description}>
                <Textarea variant='outline' placeholder='Description' {...register('description')}  _placeholder={{textDecoration: 'underline'}} resize='none'/>
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              <Button w='100%' type='submit'>Add</Button>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
  )
}

export default PortofolioForm;