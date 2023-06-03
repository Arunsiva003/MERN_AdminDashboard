import React, {useState} from 'react';
import {Box, useMediaQuery} from "@mui/material"
import { Outlet } from 'react-router-dom';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "states/api";
import { useSelector } from 'react-redux';

function Layout() {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId); // I think this might be used later
  const { data } = useGetUserQuery(userId); // I think this might be used later as well to verify the user data is being recieved
  console.log("LayoutData", data); // For Debugging

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%"> 

      <Sidebar
        user={data || {}} // This is part of the useGetUserQuery hook used to get the user data for the profile at the bottom of the bar. 
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

<Box flexGrow={1}>
        <Navbar 
        user={data || {}} // This is part of the useGetUserQuery hook used to get the user data for the profile for the logout button. 
         isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <Outlet />
      </Box>

    </Box>
  );
};

export default Layout;