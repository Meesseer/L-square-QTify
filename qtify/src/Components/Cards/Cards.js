import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '.././../logo.svg'
import { Chip } from '@mui/material';

function Cards({ songData }) {
  console.log(songData)

  return (
    <div className='Card'>
    <Card sx={{ maxWidth: 200, background: 'black', height: 300}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={songData.image}
      />
      <CardContent sx={{background: 'white'}}>
      <Chip label={`${songData.follows} follows`} />
      </CardContent>
      <CardActions sx={{color: 'white'}}>
      {songData.title}
      </CardActions>
    </Card>
    </div>
  )
}

export default Cards