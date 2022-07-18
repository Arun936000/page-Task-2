import React from 'react'
import {AppBar,Toolbar, Typography,Button, Stack,Avatar} from "@mui/material";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
  return (
    <React.Fragment>
        <AppBar sx={{backgroundColor:'whitesmoke'}} position='sticky'>
            <Toolbar>
            <Typography variant='h4' sx={{flexGrow: 1, color:'blue',fontWeight:'bolder',fontFamily:'Montserrat',fontStyle:'italic'}}>
            ∂σραмιηє
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button sx={{color:'blue'}} variant='outlined'>
                <FactCheckIcon/>
                Update Payment</Button>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopuYK4IALyeKuX44nnMoHE9bgvYxx9hYaPw&usqp=CAU'color='inherit'>
                    <PersonIcon/>
                </Avatar>
               <Typography sx={{color:'black'}}>George John</Typography>
            </Stack>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header