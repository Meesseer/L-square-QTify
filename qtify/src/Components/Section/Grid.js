import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import Cards from '../Cards/Cards';

const Item = styled(Paper)({
  backgroundColor: 'grey',
  padding: '16px',
  textAlign: 'center',
  color: '#000', // Setting text color manually
});

export default function BasicGrid({ newSongData = [], topSongData = [] }) {
  // State to toggle visibility of the song lists
  const [showSongs, setShowSongs] = useState(true);

  // Handler to toggle collapse/show
  const handleToggle = () => {
    setShowSongs(!showSongs);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" onClick={handleToggle}>
          {showSongs ? 'Collapse' : 'Show'}
        </Button>
      </Box>

      {showSongs && (
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* New Songs Grid */}
          {newSongData.length > 0 ? (
            newSongData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Item>
                  <Cards songData={item} />
                </Item>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography>No new songs available</Typography>
            </Grid>
          )}

          {topSongData.length > 0 ? (
            topSongData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Item>
                  <Cards songData={item} />
                </Item>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography>No top songs available</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
}
