import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Chip } from '@mui/material';
import { useState } from 'react';

function Cards({ songData =[],justSongs }) {
  const hasJustSongs = !!justSongs && Object.keys(justSongs).length > 0;

  return (
    
    <div>
    {hasJustSongs && (
        <Card sx={{ maxWidth: 200, background: 'black', height: 300 }}>
          <CardMedia
            component="img"
            alt="Song cover"
            height="200"
            image={justSongs.image}
          />
          <CardContent sx={{ background: 'white' }}>
            <Chip label={`${justSongs.likes} likes`} />
          </CardContent>
          <CardActions sx={{ color: 'white' }}>
            {justSongs.title}
          </CardActions>
        </Card>
    )}  
    </div>
  )
}
export default Cards