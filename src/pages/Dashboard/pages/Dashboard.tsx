import { Box, Card, Container, Typography } from '@mui/joy'
import Grid from '@mui/joy/Grid'
import React from 'react'
import { graduated, profilepicture, students, subjects, teachers } from '../../../assets'
import { Chart } from 'react-google-charts'

const Dashboard = () => {
  const datas = [
    ['Task', 'Hours per Day'],

    ['2024', 2],

    ['2023', 2],
    ['2025', 7]
  ]

  const data = [
    ['Element', 'student count', { role: 'style' }],
    ['2023', 1500, '#b87333'], // RGB value
    ['2024', 2000, 'silver'], // English color name
    ['2025', 5000, 'gold']
  ]
  return (
    <Container sx={{ borderRadius: 5 }}>
      <Grid container spacing={1}>
        <Grid xs={6} md={3}>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Card
              sx={{
                width: { xs: '100%', md: '180px' },
                height: '100px',
                backgroundColor: 'background.body'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <img
                    alt='logo'
                    src={students}
                    height={50}
                    style={{ borderRadius: '120px' }}
                  />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <Typography level='h2'>5,000</Typography>
                  <Typography level='body-sm'>students</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid xs={6} md={3}>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Card
              sx={{
                width: { xs: '100%', md: '180px' },
                height: '100px',
                backgroundColor: 'background.body'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <img
                    alt='logo'
                    src={teachers}
                    height={50}
                    style={{ borderRadius: '120px' }}
                  />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <Typography level='h2'>12</Typography>
                  <Typography level='body-sm'>teachers</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid xs={6} md={3}>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Card
              sx={{
                width: { xs: '100%', md: '180px' },
                height: '100px',
                backgroundColor: 'background.body'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                <Box sx={{ width: '100%' }}>
                  <img
                    alt='logo'
                    src={graduated}
                    height={50}
                    style={{ borderRadius: '120px' }}
                  />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <Typography level='h2'>12,000</Typography>
                  <Typography level='body-sm' sx={{ ml: 1 }}>
                    graduated
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid xs={6} md={3}>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Card
              sx={{
                width: { xs: '100%', md: '180px' },
                height: '100px',
                backgroundColor: 'background.body'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <img
                    alt='logo'
                    src={subjects}
                    height={50}
                    style={{ borderRadius: '120px' }}
                  />
                </Box>

                <Box sx={{ width: '100%' }}>
                  <Typography level='h2'>15</Typography>
                  <Typography level='body-sm'>subjects</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: { md: 5, xs: 1 } }}>
        <Grid xs={12} md={6}>
          <Box sx={{ m: 1 }}>
            <Card>
              <Chart
                chartType='ColumnChart'
                width='100%'
                height={'300px'}
                data={data}
              />
            </Card>
          </Box>
        </Grid>

        <Grid xs={12} md={6}>
          <Box sx={{ m: 1 }}>
            <Card>
              {' '}
              <Chart
                chartType='PieChart'
                data={datas}
                width='100%'
                height={'300px'}
              />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
