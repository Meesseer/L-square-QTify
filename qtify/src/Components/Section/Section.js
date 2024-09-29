import axios from 'axios';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import BasicGrid from "./Grid"
import { Box } from '@mui/material';
import BasicTabs from '../Tabs/Tabs'
import Carousel from './Carousel';

function Section() {
  const [expanded, setExpanded] = useState('panel1');
  const [newSongData, setNewSongData] = useState([])
  const [topSongData, setTopSongData] = useState([])
  const [justSongs, setJustSongs] = useState([])
  
  const fetchData = async (url) =>{
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${url}`)
      // console.log(response)
      const data = response.data
      url=== "top"? setTopSongData(data) : setNewSongData(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSongData = async () => {
    try {
      const res = await axios.get(`https://qtify-backend-labs.crio.do/songs`)
      const JustSongsData = res.data
      console.log(JustSongsData, "Called for just Songs")
      setJustSongs(JustSongsData)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
useEffect(() => {
  fetchData("top")
  fetchData("new")
  fetchSongData()
},[])



  return (

      <div className='Albums'>
    
      <Box sx={{ mb: 2,fontFamily:'Poppins'}}>
        <Typography sx={{ fontFamily:'Poppins', paddingTop:'2em'}} variant="h5" gutterBottom>
        <h1>Top Albums</h1>
        </Typography>
      </Box>
      <BasicGrid  topSongData={topSongData} newSongData={[]}/>
      <Box sx={{ mb: 2, fontFamily:'Poppins' }}>
        <Typography x={{ fontFamily:'Poppins', paddingTop:'2em'}} variant="h5" gutterBottom>
          <h1>New Albums</h1>
        </Typography>
      </Box>
      <BasicGrid  topSongData={[]} newSongData={newSongData}/>
      <BasicTabs justSongs={justSongs} />
    </div>
  )
}

export default Section;