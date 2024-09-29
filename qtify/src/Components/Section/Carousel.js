import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import * as React from 'react';
import Cards from '../Cards/Cards';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

const Carousel = ({newSongData = [], topSongData = []}) => {




    return (
      <Swiper
        spaceBetween={5}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {newSongData.length > 0 ? (
          newSongData.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards songData={item} />
            </SwiperSlide>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}

        {topSongData.length > 0 ? (
          topSongData.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards songData={item} />
            </SwiperSlide>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}
      </Swiper>
    );
  };

  export default Carousel;