import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle, Margin } from '@mui/icons-material'
import ReactPlayer from 'react-player'
import { Videos } from './'
import { FetchFromAPI } from '../utils/FetchFromAPI'

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [Related, setRelated] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    FetchFromAPI(`search?part=snippet&relatedToVideId=${id}&type=video`)
      .then((data) => setRelated(data.items))

  }, [id])


  if (!VideoDetail?.snippet) return 'loading...';
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = VideoDetail
  return (
    <Box minHeight='95vh' >
      <Stack direction={{md:"row"}}>
        <Box flex={1}>
          <Box sx={{ width: {xs:"355px",md:"100%"}, position: 'sticky', top: '86px', } }>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls="true" />
            <Typography color="#fff" variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction={{md:'row'}} justifyContent='space-between' sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction={{md:'row'}} gap={{md:'20px'}} alignItems={{md:'center'}}>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>

              </Stack>
            </Stack>
          </Box>

        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>

          <Videos videos={Related} direction="column" />

        </Box>

      </Stack>


    </Box>
  )
}

export default VideoDetail