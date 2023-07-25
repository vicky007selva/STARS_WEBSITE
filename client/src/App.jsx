import { useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2';

import './App.css'
import LoginPage from './Pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage/>
    </>
  )
}

export default App
