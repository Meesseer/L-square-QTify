import React from 'react'
import { Button } from '@mui/material'
import button from './button.module.css'

function Buttons({text = 'Give Feeback'}) {
  return (
    <Button variant="contained" className='FeedbackButton' sx={{background:'black', color:'green', font:'Poppins'}}> {text}</Button>
  )
}

export default Buttons