import React from 'react'
import { Box, Stack, Typography, Card, CardContent, CardMedia, Backdrop } from '@mui/material/';
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/Constants";



const VideosCard = ({ video: { id: { videoId }, snippet } }) => {


    return (
        <Card sx={{width:{xs:"340px",sm:"358px",md:"320px"},boxShadow:"rgba(150, 245, 250, 0.33) 0px 5px 15px;", borderRadius: '10px'} }>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title || demoChannelTitle}
                    sx={{ width: {xs:"355px",sm:"358px",md:"320px"}, height: '180px' }}
                />
            </Link>
            <CardContent sx={{ background: "#1e1e1e", height: '108px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="white">
                        {snippet?.title.slice(0,60)}
                    </Typography>

                </Link>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="gray">
                        {snippet?.channelTitle.slice(0,60)||demoChannelTitle}
                        <CheckCircle sx={{fontSize: 12 , color:'gray', ml:'5px'}}/>
                    </Typography>

                </Link>


            </CardContent>

        </Card>
    )
}

export default VideosCard