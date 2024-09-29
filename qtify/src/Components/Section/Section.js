import axios from 'axios';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import Carousel from './Carousel';
import { useEffect } from 'react';
import BasicGrid from "./Grid"
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

function Accordian() {
  const [expanded, setExpanded] = useState('panel1');
  const [newSongData, setNewSongData] = useState([])
  const [topSongData, setTopSongData] = useState([])
  
  const fetchData = async (url) =>{
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${url}`)
      console.log(response)
      const data = response.data
      url=== "top"? setTopSongData(data) : setNewSongData(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
useEffect(() => {
  fetchData("top")
  fetchData("new")
},[])


  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  //   if(isExpanded){
  //     if(panel === "panel1")
  //     fetchData("top")
  //   }
  //   if(panel === "panel2"){
  //     fetchData("new")
  //   }
  // };

  return (

      <div className='Albums'>
      {/* <Accordion sx={{backgroundColor: 'darkgrey', fontFamily: 'Poppins'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} defaultExpanded>
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? 'Collapse All' : 'Show'}
        >
          <Typography>Top Albums</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Carousel songData={songData}/>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{ backgroundColor: 'darkgrey', fontFamily: 'Poppins' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? 'Collapse All' : 'Show'}
        >
          <Typography>New Albums</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Carousel songData={songData} />
        </AccordionDetails>
      </Accordion> */}
      <Box sx={{ mb: 2,fontFamily:'Poppins', paddingTop:'2'}}>
        <Typography variant="h5" gutterBottom>
          Top Albums
        </Typography>
      </Box>
      <BasicGrid  topSongData={topSongData} newSongData={[]}/>
      <Box sx={{ mb: 2, fontFamily:'Poppins' }}>
        <Typography variant="h5" gutterBottom>
          New Albums
        </Typography>
      </Box>
      <BasicGrid  topSongData={[]} newSongData={newSongData}/>
    </div>
  )
}

export default Accordian;