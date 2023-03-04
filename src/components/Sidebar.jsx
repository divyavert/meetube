import React from 'react'
import { Box, Stack, Typography } from '@mui/material/';
import { categories } from '../utils/Constants';
import { color } from '@mui/system';
const Sidebar = ({Selected, setSelected}) => {
  
  return (
    <Stack
      direction="row"
      sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}
    >
      {categories.map((c) => (
        <button className='category-btn'
          style={{
            backgroundColor: c.name === Selected && "#fc1503",
            color: "white"
          }}
          key={c.name}
          onClick ={(e)=>(setSelected(c.name))}
        >
          <span style={{ color: c.name === Selected ? "white" : "#fc1503", marginRight: "15px" }}

          >{c.icon}</span>
          <span style={{opacity:c.name===Selected?"1":"0.75"}}>{c.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar