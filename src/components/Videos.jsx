import React from 'react'
import { Box, Stack, Typography } from '@mui/material/';
import { VideosCard, ChannelCard } from './'
const Videos = ({ videos,direction }) => {
if(!videos?.length) return "loading...."
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={1}>
      {videos.map((item, idx) => (

        <Box key={idx}>

          {item.id.videoId && <VideosCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} marginTop="0px" />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos