import React from 'react'
import { Button } from '@mui/material'
import button from './button.module.css'

function Buttons({text = 'Give Feeback'}) {
  return (
    <Button variant="contained" className='FeedbackButton' sx={{background:'black', color:'green', fontFamily: 'Poppins, sans-serif'}}> {text}</Button>
  )
}

export default Buttons