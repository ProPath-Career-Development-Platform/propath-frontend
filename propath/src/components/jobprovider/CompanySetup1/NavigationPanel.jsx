import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Button, Typography } from '@mui/material';
import 'boxicons';

import TextField from '@mui/material/TextField';
import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLandmark,faSquarePhone,faEarthAmericas, faLaptop,faCircleArrowRight,faImage,faLink,faCircleArrowLeft,faTimes} from '@fortawesome/free-solid-svg-icons'

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';


import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import Link from '@mui/icons-material/Link';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';





export default function NavigationPanel() {

    
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const inputFileRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image size more than 2MB");
    }
  };

  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImageName, setBannerImageName] = useState('');
  const inputFileRef2 = useRef(null);

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 5000000) { // Adjust size limit if needed
      const reader = new FileReader();
      reader.onload = () => {
        setBannerImage(reader.result);
        setBannerImageName(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image size more than 5MB");
    }
  };

  const today = new Date().toISOString().split('T')[0]; 


const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);const [underline, setUnderline] = React.useState(false);
  const [bulletPoints, setBulletPoints] = React.useState(false);
  const [link, setLink] = React.useState(false);

 
  const [selectedSocial, setSelectedSocial] = useState('facebook');
  const [url, setUrl] = useState('');

  const handleSocialChange = (event) => {
    console.log(event);
    if (event && event.target) { // Check if event.target exists before accessing it
      const { value } = event.target;
      setSelectedSocial(value);
    }
  };
  

  const handleUrlChange = (event) => {
    if (event && event.target) {
      setUrl(event.target.value);
    }
  };

  const handleCancel = () => {
    setSelectedSocial('facebook');
    setUrl('');
  };

  // const renderValue = (value) => {
  //   switch (value) {
  //     case 'Facebook':
  //       return (
  //         <Box display="flex" alignItems="center">
  //           <box-icon name='facebook-circle' type='logo' color='#1877f2'></box-icon>
  //           <span> Facebook</span>
  //         </Box>
  //       );
  //     case 'Instagram':
  //       return (
  //         <Box display="flex" alignItems="center">
  //           <box-icon name='instagram' type='logo' color='#E1306C'></box-icon>
  //           <span> Instagram</span>
  //         </Box>
  //       );
  //     case 'YouTube':
  //       return (
  //         <Box display="flex" alignItems="center">
  //           <box-icon name='youtube' type='logo' color='#FF0000'></box-icon>
  //           <span> YouTube</span>
  //         </Box>
  //       );
  //     default:
  //       return value;
  //   }
  // };
  
    
  
  return (
    <Box sx={{ width: '100%', typography: 'body1',mt:6}}>
      <TabContext value={value} centered>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label={<span><FontAwesomeIcon icon={faLandmark} size="lg" /> Company Info</span>} value="1" />
            <Tab label={<span><FontAwesomeIcon icon={faEarthAmericas} size="lg"/> Founding Info</span>} value="2" />
            <Tab label={<span><FontAwesomeIcon icon={faLaptop} size="lg"/> Social Media Profile</span>} value="3" />
            <Tab label={<span><FontAwesomeIcon icon={faSquarePhone} size="lg" /> Contact</span>}value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box
          sx={{
            display:'grid',
            gridTemplateColumns:'40% 60%',
            gap:'3',
            border:2,
            borderRadius:3,
            boxShadow:3,
            pb:2,
            }}
          >
            <Box
             sx={{
              pl:2,
              pr:2,
              pt:2,
              display:'flex',
              flexDirection:'column'
             }
            }
            >
            <Box
             sx={{
               display:'flex',
               alignItems:'center',
               flexDirection:'column',
             }}
            >
              <div>
              <img src="../../public/logo.png" alt="" style={{height:'40px'}}/>
              </div>
              <div>
              <p>Where Talents meets Opportunity</p>
              </div>
            </Box>
            <Box
              sx={{
                display:'flex',
                mt:2,
                flexGrow:1,
                }}
            >
            <img src="../../public/founding_info.jpg" alt="" style={{ borderRadius: '20px',height:'100%',objectFit: 'cover'}} />
            </Box>
            </Box>
            <Box
             sx={{
                display:'flex',
                flexDirection:'column',
                gap:'3',
                
             }}
            >
              <Box
                sx={{
                  display:'flex',
                  justifyContent:'center',
                  pt:6,
                  
                }}
              >
              <p>Upload Logo and Banner Images</p>
              </Box>
            <Box
             sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
             }}
            >
              
          <Box
      sx={{
        maxWidth: '400px',
        width: '100%',
        background: '#fff',
        padding: '30px',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <input
        type="file"
        id="file"
        accept="image/*"
        hidden
        ref={inputFileRef}
        onChange={handleImageUpload}
      />
      <Box
        className={`img-area ${image ? 'active' : ''}`}
        data-img={imageName}
        sx={{
          position: 'relative',
          width: '100%',
          height: '240px',
          background: '#f2f2f2',
          marginBottom: '30px',
          borderRadius: '15px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '&.active:hover::before': {
            opacity: 1,
          },
          '&::before': {
            content: `"${imageName}"`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .5)',
            color: '#fff',
            fontWeight: 500,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'all .3s ease',
          }
        }}
      >
        {image ? (
          <Box
            component="img"
            src={image}
            alt="Preview"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 100,
            }}
          />
        ) : (
          <>
            <FontAwesomeIcon icon={faImage} size="2xl" />
            <i className='bx bxs-cloud-upload icon' style={{ fontSize: '100px' }}></i>
            <Typography variant="h6" component="h3" sx={{ marginBottom: '6px' }}>
              Upload Logo
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Image size must be less than <span style={{ fontWeight: 600 }}>2MB</span>
            </Typography>
          </>
        )}
      </Box>
      <Button
        variant="contained"
        sx={{
          display: 'block',
          width: '50%',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#0071FF',
          color: '#fff',
          fontWeight: 500,
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#005DD1',
          },
        }}
        onClick={() => inputFileRef.current.click()}
      >
        Select Image
      </Button>
    </Box>

    <Box
      sx={{
        maxWidth: '800px',
        width: '100%',
        background: '#fff',
        padding: '30px',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // marginTop: '20px', 
      }}
    >
      <input
        type="file"
        id="bannerFile"
        accept="image/*"
        hidden
        ref={inputFileRef2}
        onChange={handleBannerUpload}
      />
      <Box
        className={`img-area ${bannerImage ? 'active' : ''}`}
        data-img={bannerImageName}
        sx={{
          position: 'relative',
          width: '100%',
          height: '240px', // Larger height for banner
          background: '#f2f2f2',
          marginBottom: '30px',
          borderRadius: '15px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '&.active:hover::before': {
            opacity: 1,
          },
          '&::before': {
            content: `"${bannerImageName}"`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, .5)',
            color: '#fff',
            fontWeight: 500,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'all .3s ease',
          }
        }}
      >
        {bannerImage ? (
          <Box
            component="img"
            src={bannerImage}
            alt="Preview"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 100,
            }}
          />
        ) : (
          <> 
              <FontAwesomeIcon icon={faImage} size="2xl" />
            <i className='bx bxs-cloud-upload icon' style={{ fontSize: '100px' }}></i>
            <Typography variant="h6" component="h3" sx={{ marginBottom: '6px' }}>
              Upload Banner
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Image size must be less than <span style={{ fontWeight: 600 }}>5MB</span>
            </Typography>
          </>
        )}
      </Box>
      <Button
        variant="contained"
        sx={{
          display: 'block',
          width: '50%',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#0071FF',
          color: '#fff',
          fontWeight: 500,
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#005DD1',
          },
        }}
        onClick={() => inputFileRef2.current.click()}
      >
        Select Banner
      </Button>
    </Box>
        
        </Box>
        
        <Box
         sx={{
          pb: 4, // Adds padding-bottom (2 * 8px = 16px)
      }}
        
        >
        <Box
        sx={{
        width: '95%',
        maxWidth: '100%',
        paddingLeft:'30px',
       
        }}
        >
        <TextField fullWidth label="Company Name" id="fullWidth" required/>
        </Box>
        </Box>
        
        
        <Box
        sx={{
          pb: 4, // Adds padding-bottom (2 * 8px = 16px)
      }}
        
        
        >
        <Box
        sx={{
        width: '95%',
        maxWidth: '100%',
        paddingLeft:'30px',
        }}
        >
          <FormControl>
      <FormLabel>About Us</FormLabel>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <IconButton
              variant={underline ? 'soft' : 'plain'}
              color={underline ? 'primary' : 'neutral'}
              aria-pressed={underline}
              onClick={() => setUnderline((bool) => !bool)}
            >
              <FormatUnderlined />
            </IconButton>
            <IconButton
              variant={bulletPoints ? 'soft' : 'plain'}
              color={bulletPoints ? 'primary' : 'neutral'}
              aria-pressed={bulletPoints}
              onClick={() => setBulletPoints((bool) => !bool)}
            >
              <FormatListBulleted />
            </IconButton>
            <IconButton
              variant={link ? 'soft' : 'plain'}
              color={link ? 'primary' : 'neutral'}
              aria-pressed={link}
              onClick={() => setLink((bool) => !bool)}
            >
              <Link />
            </IconButton>
           
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
          textDecoration: underline ? 'underline' : 'initial',
          listStyleType: bulletPoints ? 'disc' : 'none',
        }}
      />
    </FormControl>
        </Box>
        </Box>
        
        <Box

        sx={{
          alignSelf:'center'
        }}
        >
        <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '16px 0',
          borderRadius: '15px',
          backgroundColor: '#0071FF',
          color: '#fff',
          fontWeight: 500,
          fontSize: '13px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#005DD1',
          },
        }}
        
      >
       Save and Next   <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
      </Button>
        </Box>
        
        </Box>
        </Box>
            
        </TabPanel>

        {/* company info page end */}

        
        <TabPanel value="2">
          <Box

            sx={{
            display:'grid',
            gridTemplateColumns:'40% 60%',
            gap:'3',
            border:2,
            borderRadius:3,
            boxShadow:3,
            pb:6,
            overflow: 'auto',
            maxHeight: 'calc(100vh-10px)',
            
            }}
          >
          <Box
             sx={{
              pl:2,
              pr:2,
              pt:2,
              display:'flex',
              flexDirection:'column'
             }
            }
            >
            <Box
             sx={{
               display:'flex',
               alignItems:'center',
               flexDirection:'column',
             }}
            >
              <div>
              <img src="../../public/logo.png" alt="" style={{height:'40px'}}/>
              </div>
              <div>
              <p>Where Talents meets Opportunity</p>
              </div>
            </Box>
            <Box
              sx={{
                display:'flex',
                mt:2,
                flexGrow: 1,
                
                }}
            >
            <img src="../../public/company_info.jpg" alt="" style={{ borderRadius: '20px',height:'100%',objectFit: 'cover'}} />
            </Box>
            </Box>
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              gap:'40px',
              // justifyContent:'center'
              pt:12,
              alignItems:'center',
              
              
            }}
          >
            <Box
            sx={{
              display:'flex',
              flexDirection:'row',
              gap:'30px',
             
            }}
            >
            <Box>
            <FormControl sx={{ width: 270 }}>
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
        Organization Type
      </FormLabel>
      <Select
        defaultValue="dog"
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            // TODO: Material UI set aria-labelledby correctly & automatically
            // but Base UI and Joy UI don't yet.
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}
      >
        <Option value="dog">Public Limited Company (PLC)</Option>
        <Option value="cat">Private Limited Company (PVT)</Option>
        <Option value="fish">Government Agency</Option>
        <Option value="bird">Partnership</Option>
      </Select>
      {/* <FormHelperText id="select-field-demo-helper">
        This is a helper text.
      </FormHelperText> */}
        </FormControl>
            </Box>
            <Box>
            <FormControl sx={{ width: 270 }}>
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
        Industry Type
      </FormLabel>
      <Select
        defaultValue="dog"
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            // TODO: Material UI set aria-labelledby correctly & automatically
            // but Base UI and Joy UI don't yet.
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}
      >
        <Option value="dog">Public Limited Company (PLC)</Option>
        <Option value="cat">Private Limited Company (PVT)</Option>
        <Option value="fish">Government Agency</Option>
        <Option value="bird">Partnership</Option>
      </Select>
      {/* <FormHelperText id="select-field-demo-helper">
        This is a helper text.
      </FormHelperText> */}
        </FormControl>
            </Box>
            
            
            </Box>
            
            <Box
            sx={{
              display:'flex',
              flexDirection:'row',
              gap:'30px',
             
            }}
            >
              <Box>
              <FormControl sx={{ width: 270 }}>
              <FormLabel>Established Date</FormLabel>
              <Input
                type="date"
                // placeholder="Enter a URL"
                startAdornment={
                <InputAdornment position="start">
                <FontAwesomeIcon icon={faLink} style={{ color: "#74C0FC" }} />
                </InputAdornment>
          }
        />
      </FormControl>
              </Box>
              <Box>
              <FormControl sx={{ width: 270 }}>
              <FormLabel>Company Website</FormLabel>
              <Input
                type="url"
                placeholder="Enter a URL"
                startAdornment={
                <InputAdornment position="start">
                <FontAwesomeIcon icon={faLink} style={{ color: "#74C0FC" }} />
                </InputAdornment>
          }
        />
      </FormControl>
              </Box>
            </Box>
            
            <Box
            sx={{
              width: '68%',
              }}  
            >
            <FormControl>
      <FormLabel>Company Vision</FormLabel>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <IconButton
              variant={underline ? 'soft' : 'plain'}
              color={underline ? 'primary' : 'neutral'}
              aria-pressed={underline}
              onClick={() => setUnderline((bool) => !bool)}
            >
              <FormatUnderlined />
            </IconButton>
            <IconButton
              variant={bulletPoints ? 'soft' : 'plain'}
              color={bulletPoints ? 'primary' : 'neutral'}
              aria-pressed={bulletPoints}
              onClick={() => setBulletPoints((bool) => !bool)}
            >
              <FormatListBulleted />
            </IconButton>
            <IconButton
              variant={link ? 'soft' : 'plain'}
              color={link ? 'primary' : 'neutral'}
              aria-pressed={link}
              onClick={() => setLink((bool) => !bool)}
            >
              <Link />
            </IconButton>
            
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
          textDecoration: underline ? 'underline' : 'initial',
          listStyleType: bulletPoints ? 'disc' : 'none',
        }}
      />
    </FormControl>
            </Box>
            <Box
              sx={{
                display:'flex',
                flexDirection:'row',
                gap:'10px',
                justifyItems:'flex-start'
              }}
            >
              <Box>
              <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#fff',
          color:'#0071FF',
          // color: '#fff',
          fontWeight: 500,
          fontSize: '13px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
        
      >
       <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" /> Previous  
      </Button>
              </Box>
              <Box>
              <Button
        variant="contained"
        sx={{
        
          display: 'block',
          width: '200px',
          padding: '10px 0',
          borderRadius: '15px',
          backgroundColor: '#0071FF',
          color: '#fff',
          fontWeight: 500,
          fontSize: '13px',
          cursor: 'pointer',
          transition: 'all .3s ease',
          '&:hover': {
            backgroundColor: '#005DD1',
          },
        }}
        
      >
       Save and Next   <FontAwesomeIcon icon={faCircleArrowRight} size="lg" />
      </Button>
              </Box>
           
            </Box>
          </Box>
          
          </Box>
          </TabPanel>

          
        <TabPanel value="3">
          <Box>
            <Box>
              
            </Box>
            <Box>
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '5px',
        width: '100%',
        maxWidth: '500px',
      }}
    >
      <Select
        defaultValue='Facebook'
        
        onChange={handleSocialChange}
        sx={{ marginRight: '5px', width:'150px' }}
        >
        <Option value="Facebook"><box-icon name='facebook-circle' type='logo' color='#1877f2' ></box-icon> Facebook</Option>
        <Option value="Instagram"><box-icon name='instagram' type='logo' color='#E1306C'></box-icon> Instagram</Option>
        <Option value="YouTube"><box-icon name='youtube' type='logo' color='#FF0000'></box-icon>YouTube</Option>
        {/* Add more options as needed */}
      </Select>
      
    
      <TextField
        type="text"
        placeholder="Profile link/url..."
        value={url}
        onChange={handleUrlChange}
        variant="outlined"
        sx={{ flexGrow: 1, marginRight: '5px' }}
        InputProps={{
          sx: { paddingRight: '10px',borderRadius:'10px' },
        }}
      />
      <IconButton onClick={handleCancel}>
        <FontAwesomeIcon icon={faTimes} />
      </IconButton>
    </Box>
            </Box>
          </Box>
          
        </TabPanel>


      <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
