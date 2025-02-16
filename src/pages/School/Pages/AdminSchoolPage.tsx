import { Box, Button, Card, Container, Typography } from '@mui/joy'
import React from 'react'
import { schoolimage } from '../../../assets'
import { AddIcCallOutlined } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';


const AdminSchoolPage = () => {
  return (
  <Container>

<Card sx={{ width: '100%', height: '50vh', backgroundColor:'background.body' }}>



    <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
            <Typography level='h4'>School Registration</Typography>
        </Box>
        <Box>
            <Button startDecorator={<AddIcon/>}>School</Button>
        </Box>
    </Box>

    <Box sx={{display:'flex', justifyContent:'center'}}>
        <img alt='sschool-picture' src={schoolimage} height={200} width={200} style={{borderRadius:'100px'}}/>
    </Box>

</Card>

  </Container>
  )
}

export default AdminSchoolPage
