import React from 'react'
import {Box, LinearProgress, Typography} from "@mui/joy";
import { logo } from '../../../assets';
import SecondLoader from '../../../components/SecondLoader'

const AdminResultsPage = () => {
  return (
    <div>
      
      <Box sx={{ backgroundColor:'white', width:'150px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:1, borderRadius:4}}>

        <img 
        alt='logo'
        src={logo}
        width={45}
        />
<Typography level='body-lg'>ShuleKwanza</Typography>
<Box sx={{width:'100%'}}>
<LinearProgress color='primary' size="sm" />
</Box>

      </Box>


      
    </div>
  )
}

export default AdminResultsPage
