import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import Box from '@mui/joy/Box'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Page from './components/Page'
import RoutesContainer from './routes/Routes'

export default function JoyOrderDashboardTemplate () {
  return (

<>

<RoutesContainer />

</>
  )
}

