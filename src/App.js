import { Stack} from '@mui/material'
import React from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Table from './Components/Table'

const App = () => {
  return (
    <div>
      <Header/>
      <Stack spacing={2} flex={2} direction='row' >
      <Sidebar/>
      <Table/>
      </Stack>
    </div>
  )
}

export default App