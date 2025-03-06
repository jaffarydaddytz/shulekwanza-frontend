import { Box, Button, Card, Container, Typography } from '@mui/joy'
import React from 'react'
import { schoolimage } from '../../../assets'
import { AddIcCallOutlined } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';

const AdminSchoolPage = () => {



      const StepperForm = () => {
        return (
            <Stepper sx={{ width: '100%' }}>
            <Step
              orientation="vertical"
              indicator={
                <StepIndicator variant="solid" color="neutral">
                  1
                </StepIndicator>
              }
            >
              Order placed

              <Box>hey</Box>
            </Step>
            <Step
              orientation="vertical"
              indicator={<StepIndicator variant="outlined">2</StepIndicator>}
            >
              In review
              <Box>heyo</Box>
            </Step>
            <Step orientation="vertical" indicator={<StepIndicator>3</StepIndicator>}>
              Approved
            </Step>
          </Stepper>
        );
      }













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

<StepperForm />

  </Container>
  )
}

export default AdminSchoolPage
