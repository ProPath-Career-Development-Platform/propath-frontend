import React from 'react'

import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent'
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

function SettingsFoundingInfo() {
  return (
    <>
    
    <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
    <form>
        <Card>
            
            <CardContent>

                <Box
                    sx={{
                        display: { xs: 'block', sm: 'grid',},
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: '1rem',
                        marginBottom: '1rem',  
                    }}
                >

                    <FormControl
                      sx={{
                        mb:{xs: 2, sm: 0}
                      }}
                    >

                        <FormLabel>Organization Type</FormLabel>
                        <Select 
                        name='jobRole' 
                        placeholder="Select a Role" 

                        onChange={(event, newValue) => { 

                                  if (errors.jobRole) {
                                    setErrors((prevState) => {
                                      const newErrors = { ...prevState };
                                      delete newErrors.jobRole;
                                      return newErrors;
                                    });
                                  }

                                  setFormData({ ...formData, jobRole: newValue }); 

                                  }}

                        
                        >
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>


                    </FormControl>

                    <FormControl
                      sx={{
                        mb:{xs: 2, sm: 0}
                      }}
                    >

                        <FormLabel>Industry Type</FormLabel>
                        <Select 
                        name='jobRole' 
                        placeholder="Select a Role" 

                        onChange={(event, newValue) => { 

                                  if (errors.jobRole) {
                                    setErrors((prevState) => {
                                      const newErrors = { ...prevState };
                                      delete newErrors.jobRole;
                                      return newErrors;
                                    });
                                  }

                                  setFormData({ ...formData, jobRole: newValue }); 

                                  }}

                        
                        >
                          <Option value="dog">Dog</Option>
                          <Option value="cat">Cat</Option>
                          <Option value="fish">Fish</Option>
                          <Option value="bird">Bird</Option>
                      </Select>


                    </FormControl>



                    <FormControl
                      sx={{
                        mb:{xs: 2, sm: 0}
                      }}
                    >

                        <FormLabel>Year of Establishment</FormLabel>

                        <Input
                         type='date'
                          name='date'
                          />
                        


                    </FormControl>

                    <FormControl>

                        <FormLabel>Company Website</FormLabel>

                        <Input
                         
                          placeholder='https://www.example.com'
                          startDecorator={<Button disabled><LanguageIcon/></Button>}
                          />
                        


                    </FormControl>

                </Box>

                <Box
                  sx={{

                  }}
                >

                    <FormControl>
                        
                          <FormLabel>Company Vision</FormLabel>
  
                          <Textarea
                            minRows={5}
                            maxRows={4}
                           
                            placeholder='Write a brief description about your company'
                            />
                    </FormControl>

                </Box>




            </CardContent>
        </Card>
    </form>   

    </Stack>
    
    
    </>
  )
}

export default SettingsFoundingInfo