
import * as React from 'react';
import { Outlet } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

export default function JoyOrderDashboardTemplate() {
    return (
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Header />
          <Sidebar />

          <Outlet/> {/*Renders the child route's element, if there is one.*/}
          
        </Box>
      </CssVarsProvider>
    );
  }