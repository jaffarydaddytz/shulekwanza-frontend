import { Box, Button, Card, Container, FormControl, FormLabel, Input, Stack, Typography } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo, shulekwanzalogo } from '../../../assets'

const AdminTeacherPage = () => {
  return (
<Container sx={{backgroundColor:'background.level1', p:4, borderRadius:4}}>

    <Box sx={{  display:'flex', alignItems:'center', justifyContent:'center' }}>
<Stack sx={{maxWidth:'500px', gap:2, backgroundColor:'white', borderRadius:4}}>

<Card>


{/*     <Box  >
    <img alt='logo' src={shulekwanzalogo}  height={50} width={50} />
    </Box> */}
<Box

  sx={{

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <img
    alt="logo"
    src={shulekwanzalogo}
    style={{
      width: '25%',
      height: '25%',
      objectFit: 'cover',
    }}
  />
</Box>



<FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>

                <FormControl >
                <FormLabel></FormLabel>
                  <Button >LOGIN</Button>
                </FormControl>

</Card>



            


        

            </Stack>

            </Box>

      
            
            
         
         
     
   
   
</Container>
  )
}

export default AdminTeacherPage
