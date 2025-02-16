import { Box, Button, Card, Stack, Typography } from '@mui/joy'
import React from 'react'

const Page = () => {
  return (
<Box sx={{ height:"100vh"}}>

    

    <Box sx={{}}>

        <Stack direction='row' sx={{gap:1, display:'flex', justifyContent:'space-around'}}>
            <Card>this is card1</Card>
            <Card>this is card 2</Card>
            <Card>this is card 3</Card>
        </Stack>

{/*         <Button variant='solid'  sx={{color:'white', backgroundColor:'primary' ,}}>
            Click here
        </Button> */}

    </Box>

</Box>
  )
}

export default Page
