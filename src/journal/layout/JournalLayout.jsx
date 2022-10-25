import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { Navbar, Sidebar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        <Navbar />
        <Sidebar drawerWidth={drawerWidth} />
        <Box component='main' sx={{ flexGrow: 1, padding: 3 }}>
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}
