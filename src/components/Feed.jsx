import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material/';
import { borderRight } from '@mui/system';
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { Sidebar, Videos } from './'
const Feed = () => {
  const [Selected, setSelected] = useState("New")
  const [Video, setVideo] = useState([])
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${Selected}`)
      .then((data) => { setVideo(data.items) })
  }, [Selected])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{ height: { sx: 'auto', md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar Selected={Selected} setSelected={setSelected} />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copyright metoob 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {Selected}
          <span style={{ color: '#fc1503', marginLeft: '7px' }}>videos</span>
        </Typography>
        <Videos videos={Video} />
      </Box>
    
    </Stack>
  
  )
}

export default Feed