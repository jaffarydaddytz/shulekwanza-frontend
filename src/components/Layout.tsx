import React from 'react'
import Page from './Page'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Header from './Header'
import Sidebar from './Sidebar'
import { Box } from '@mui/joy'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
<>


<CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Header />

        <Sidebar />

        <Box
          component='main'
          className='MainContent'
          sx={{
            flex: 1,

            ml: { sx: '0', md: 'var(--Sidebar-width)' },
            mt: 'calc(var(--Header-height) )',
            px: 1,
            pb: 2,
            pt:1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            height: `calc(100vh - mt: 'var(--Header-height)')`,
            overflowY: 'auto',
            minWidth: 0,
            backgroundColor:'background.level1'
          }}
        >
          {/* Main Content */}
          <Outlet/>
        </Box>
      </Box>
    </CssVarsProvider>



</>
  )
}

export default Layout
