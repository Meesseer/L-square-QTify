import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import * as React from 'react';
import Cardsfortabs from '../../Components/Cards/Cardsfortabs'
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import BasicTabs from '../Tabs/Tabs';
import Cards from '../Cards/Cards';

const Carousel = ({newSongData = [], topSongData = [], justSongs=[]}) => {




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
        ) : null
        }

        {topSongData.length > 0 ? (
          topSongData.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards songData={item} />
            </SwiperSlide>
          ))
        ) : null
        }

        {justSongs.length > 0 ? (
          justSongs.map((item, index) => (
            <SwiperSlide key={index}>
              <Cardsfortabs justSongs={item} />
            </SwiperSlide>
          ))
        ) : null
        }
      </Swiper>
    );
  };

  export default Carousel;