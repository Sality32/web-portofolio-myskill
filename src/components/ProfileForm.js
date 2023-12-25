'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Card, CardHeader, Text, CardBody, FormControl, Flex, Input, Textarea, Button, VStack, FormErrorMessage, textDecoration } from '@chakra-ui/react';

const ProfileForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({
    resolver: async (data) => {
      try {
        const schema = Yup.object({
          name: Yup.string().max(100, 'Maximum character is 100').required('Name Field is Required'),
          position: Yup.string().required('Position field is Required'),
          description: Yup.string().required('Description field is Required').min(50, 'Must be at least 50 character')
        });
        await schema.validate(data, {abortEarly: false});
        return { values: data, errors: {}}
      } catch (error) {
        return { values: {}, errors: error.inner.reduce((acc, e) => ({ ...acc, [e.path]: e.message}), {})};
      }
    },
  });

  const handleFormSubmit = ( data) => {
    onSubmit(data);
  }
  return (
    <Card shadow='xl' maxWidth={{  "2xl": '2xl', xl: "xl", lg:'xl', md:'xl', sm:"md",  base:'sm'}}>
        <CardHeader>
          <Text fontSize='md' fontWeight='bold' textDecoration='underline'>Profile</Text>
        </CardHeader>
        <CardBody>
          <Flex gap={6} direction='column'>
            <VStack as='form'  onSubmit={handleSubmit(handleFormSubmit)}>
              <FormControl isInvalid={!!errors.name} >  
                <Input variant='outline' placeholder='Name' {...register('name')} _placeholder={{textDecoration: 'underline'}}/>
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.position}>
                <Input variant='outline' placeholder='Position' {...register('position')}  _placeholder={{textDecoration: 'underline'}} />
                <FormErrorMessage>{errors.position}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.description}>
                <Textarea variant='outline' placeholder='Description' {...register('description')}  _placeholder={{textDecoration: 'underline'}} resize='none'/>
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              <Button w='100%' type='submit'>Edit Profile</Button>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
  )
}

export default ProfileForm;