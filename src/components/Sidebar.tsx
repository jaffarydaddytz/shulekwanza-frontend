import GlobalStyles from '@mui/joy/GlobalStyles'
import Box from '@mui/joy/Box'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton'
import ListItemContent from '@mui/joy/ListItemContent'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { Link, useLocation } from 'react-router-dom';

/* sidebar icons */
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'

/* images */
import { shulekwanzalogo } from '../assets'

import { closeSidebar } from '../utils'

/* IMPORT ROUTES */
import {
  ERROR_404_PAGE,
  NAVIGATE_TO_ADMINCA,
  NAVIGATE_TO_ADMINDASHBOARD,
  NAVIGATE_TO_ADMINRESULTS,
  NAVIGATE_TO_ADMINSCHOOL,
  NAVIGATE_TO_ADMINTEACHERPAGE,
  NAVIGATE_TO_STUDENTDASHBOARD,


} from '../routes/types'
import { useState } from 'react'

export default function Sidebar () {

  const location = useLocation();
 



  return (
    <Sheet
      className='Sidebar'
      sx={{
        position: { xs: 'fixed', md: 'fixed' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none'
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,

        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider'
      }}
    >
      <GlobalStyles
        styles={theme => ({
          ':root': {
            '--Sidebar-width': '200px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '200px'
            }
          }
        })}
      />
      <Box
        className='Sidebar-overlay'
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)'
          }
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: 1
        }}
      >
        <img
          src={shulekwanzalogo}
          alt='shulekwanza-logo'
          height='35px'
          width='35px'
          style={{ borderRadius: '5px' }}
        />

        <Typography level='title-lg'>ShuleKwanza</Typography>
      </Box>

      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5
          }
        }}
      >
        <List
          size='sm'
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': theme => theme.vars.radius.sm
          }}
        >
          <ListItem>
            <ListItemButton selected={location.pathname === NAVIGATE_TO_ADMINDASHBOARD} role='menuitem' component={Link} to={NAVIGATE_TO_ADMINDASHBOARD}>
              <GridViewOutlinedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={location.pathname === NAVIGATE_TO_ADMINSCHOOL} role='menuitem' component={Link} to ={NAVIGATE_TO_ADMINSCHOOL}>
              <SchoolOutlinedIcon />
              <ListItemContent>
                <Typography level='title-sm'>School</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton  role='menuitem' component={Link} selected={location.pathname === NAVIGATE_TO_ADMINTEACHERPAGE} to={NAVIGATE_TO_ADMINTEACHERPAGE}>
              <PersonOutlineOutlinedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Teachers</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* Nested items */}
          {/*        <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Tasks</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: 'rotate(180deg)',
                          }
                        : {
                            transform: 'none',
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton>All tasks</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Backlog</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>In progress</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Done</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem> */}

          <ListItem>
            <ListItemButton
              role='menuitem'
              component={Link} selected={location.pathname === NAVIGATE_TO_STUDENTDASHBOARD} to={NAVIGATE_TO_STUDENTDASHBOARD}
            >
              <ImportContactsTwoToneIcon />
              <ListItemContent>
                <Typography level='title-sm'>Students</Typography>
              </ListItemContent>
              {/*     <Chip size="sm" color="primary" variant="solid">
                4
              </Chip> */}
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              role='menuitem'
              component={Link} selected={location.pathname === NAVIGATE_TO_ADMINCA} to={NAVIGATE_TO_ADMINCA}
            >
              <AssignmentOutlinedIcon />
              <ListItemContent>
                <Typography level='title-sm'>CA</Typography>
              </ListItemContent>
              {/*     <Chip size="sm" color="primary" variant="solid">
                4
              </Chip> */}
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              role='menuitem'
              component={Link} selected={location.pathname === NAVIGATE_TO_ADMINRESULTS} to={NAVIGATE_TO_ADMINRESULTS}
              
            >
              <DescriptionOutlinedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Results</Typography>
              </ListItemContent>
              {/*     <Chip size="sm" color="primary" variant="solid">
                4
              </Chip> */}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  )
}
