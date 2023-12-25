// FileUpload.js
import React, { useState } from "react";
import { Box, Text, Button, Card, Image, CardBody, CardHeader, Flex, Avatar } from "@chakra-ui/react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(FilePondPluginFileValidateType);

const acceptedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

const FileUpload = ({ title, onChange}) => {
  const [base64String, setBase64String] = useState("");

  const handleFileLoad = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileValidate = (fileItem) => {
    const fileType = fileItem.file.type;
    if (!acceptedFileTypes.includes(fileType)) {
      return {
        message: "Invalid file type. Please upload only PNG, JPG, or JPEG.",
        status: "error",
      };
    }
    return true;
  };

  return (
    <Card shadow='xl' maxWidth={{ "2xl": '2xl',xl: 'xl', lg:'xl', md:'xl',sm:"md",  base:'sm'}}>
      <CardHeader>
          <Text fontSize='md' fontWeight='bold' textDecoration='underline'>{title}</Text>
        </CardHeader>
      <CardBody>
        <Flex gap={5} direction='column'>
          {base64String != "" ? 
            title === 'Avatar Image' ?
            <Avatar alignSelf='center' src={base64String} size="xl" />:
            
            <Image borderRadius='15px' objectFit='cover' src={base64String} alt='background' h='200px'/>:
            
            <FilePond
              credits={''}
              onaddfile={(error, fileItem) => handleFileLoad(fileItem.file)}
              allowFileValidateType
              acceptedFileTypes={acceptedFileTypes}
              onvalidate={handleFileValidate}
            />
            }
          <Button w='100%' onClick={()=>onChange(base64String)}>Edit Background</Button>
        </Flex>
          
      </CardBody>
    </Card>
  );
};

export default FileUpload;
