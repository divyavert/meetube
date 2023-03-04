import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { Stack, Box } from '@mui/material'
import { VideosCard, ChannelCard , Videos } from './'
const ChannelDetail = () => {
  const [channelDetail, SetChannelDeatil] = useState();
  const [videos, SetVideos] = useState([]);
  const { id } = useParams();


  console.log(channelDetail)
  console.log(videos)
  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => SetChannelDeatil(data.items[0]))

    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => SetVideos(data?.items));
                                             


  }, [id])

  return (
    <Box minHeight="95vh">
      <Box >
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
    <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'},ml:{xs:"15px",md:"0px"}} }  />
          <Videos videos={videos}/>
  
    </Box>
   
    </Box>


  )
}

export default ChannelDetail