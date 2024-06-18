import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../../../index.css'




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

//   const [italic, setItalic] = React.useState(false);
//   const [fontWeight, setFontWeight] = React.useState('normal');
//   const [anchorEl, setAnchorEl] = React.useState(null);

 
  
  return (
    <Box sx={{ width: '100%', typography: 'body1',mt:6}}>
      <TabContext value={value} centered>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Company Info" value="1" />
            <Tab label="Founding Info" value="2" />
            <Tab label="Social Media Profile" value="3" />
            <Tab label="contact" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Box
             sx={{
                display:'flex',
                flexDirection:'column',
                gap:'3'
             }}
            >
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
            <i className='bx bxs-cloud-upload icon' style={{ fontSize: '100px' }}></i>
            <Typography variant="h6" component="h3" sx={{ marginBottom: '6px' }}>
              Upload Image
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
          width: '70%',
          padding: '16px 0',
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
          padding: '16px 0',
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
        width: '100%',
        maxWidth: '100%',
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
        width: '100%',
        maxWidth: '100%',
        
        }}
        >
        <TextField fullWidth label="About Us" id="fullWidth" required/>
        </Box>
        </Box>
        
        <Box>
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
        Save and submit
      </Button>
        </Box>
        
        </Box>
            
        </TabPanel>

        {/* company info page end */}

        
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}