import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material/';
import { borderRight } from '@mui/system';
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom';

import { Videos } from './'
import { Margin } from '@mui/icons-material';
const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [Video, setVideo] = useState([])
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setVideo(data.items) })
  }, [searchTerm])
  console.log(searchTerm)
  return (




    <Box p={2} sx={{ overflowY: "auto", height: "90vh", ml:{md:"100px"}, flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search result for
        <span style={{ color: '#fc1503', marginLeft: '7px' }}>{searchTerm}</span>
      </Typography>

      <Videos videos={Video} />
    </Box>


  

  )
}

export default SearchFeed