import * as React from 'react'
import GlobalStyles from '@mui/joy/GlobalStyles'
import Sheet from '@mui/joy/Sheet'
import IconButton from '@mui/joy/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

/* images */
import { profilepicture } from '../assets'

import { toggleSidebar } from '../utils'
import ColorSchemeToggle from './ColorSchemeToggle'
import { Box } from '@mui/joy'

export default function Header () {
  return (
    <Sheet
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
        backgroundColor: 'background.surface',
        display: 'flex'
      }}
    >
      <GlobalStyles
        styles={theme => ({
          ':root': {
            '--Header-height': '60px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '60px'
            }
          }
        })}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          width: '100%'
        }}
      >
        <IconButton
          onClick={() => toggleSidebar()}
          variant='outlined'
          color='neutral'
          size='sm'
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton variant='outlined' sx={{ borderRadius: '50px' }}>
            <img
              src={profilepicture}
              alt='shulekwanza-logo'
              height='25px'
              width='25px'
              style={{ borderRadius: '50px', border: '1px' }}
            />
          </IconButton>

          <ColorSchemeToggle sx={{ ml: 'auto' }} />
        </Box>
      </Box>
    </Sheet>
  )
}
