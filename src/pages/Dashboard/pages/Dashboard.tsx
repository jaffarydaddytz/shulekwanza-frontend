import { Box, Card, Container } from '@mui/joy'
import React from 'react'

const Dashboard = () => {
  return (
  <Container sx={{backgroundColor:'danger.500', borderRadius:5}}>
  
    <Box sx={{display:'flex', gap:1, justifyContent:'space-around', marginY:1}}>
      
        <Card> card 1</Card>
        <Card> card 2</Card>
        <Card> card 2</Card>
    </Box>
  </Container>
  )
}

export default Dashboard
