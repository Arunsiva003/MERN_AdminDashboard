import React,{useState} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material'
// import AppBar from '@mui/material';
// import Toolbar from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'states';
import { useTheme } from '@emotion/react';
import profileImg from "assets/pic.jpg"
import { AppBar, IconButton, InputBase,Toolbar} from '@mui/material';


function Navbar() {
const dispatch = useDispatch();
const theme = useTheme();


  return (
    <AppBar sx={{
        position : "static",
        background : "none",
        boxshadow : "none"
    }}>
        <Toolbar sx={{justifyContent:"space-between"}}>



            {/* Leftside */}
            <FlexBetween>
                <IconButton onClick={() => console.log("left sidebar")}>
                    <MenuIcon/>
                </IconButton>
            <FlexBetween backgroundColor = {theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem">

            <InputBase placeholder='Search....'/>
            <IconButton>
                <Search/>
            </IconButton>
            </FlexBetween>
            </FlexBetween>


            {/* RightSide */}
        
        <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode == "dark" ? (
                    <DarkModeOutlined sx={{fontsize:"25px"}}/>):(<LightModeOutlined sx={{fontsize:"25px"}}/>)
                }
            </IconButton>

            <IconButton>
                <SettingsOutlined sx={{fontsize:"25px"}}/>
            </IconButton>

        </FlexBetween>


        </Toolbar>
        
    </AppBar>
  )
}

export default Navbar