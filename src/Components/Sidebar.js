import React from 'react'
import { Box,List,ListItemButton,ListItemIcon,Divider,ListItemText  } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalHospital from '@mui/icons-material/LocalHospital';
import MasksIcon from '@mui/icons-material/Masks';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <Box  p={2}  sx={{display:{xs:'none',sm:"block"}}}>
          <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
             <GridViewIcon/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MasksIcon/>
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LocalHospital/>
          </ListItemIcon>
          <ListItemText primary="Doctor" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ManageAccountsIcon/>
          </ListItemIcon>
          <ListItemText primary="Leave Management" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
           <WorkspacePremiumIcon/>
          </ListItemIcon>
          <ListItemText primary="Certificate Generator" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
             <SettingsSystemDaydreamIcon/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon/>
            </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        </List>
    </Box>
  )
}

export default Sidebar