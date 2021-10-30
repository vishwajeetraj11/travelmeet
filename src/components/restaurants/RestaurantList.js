import React, { useState, useEffect } from "react";
import { getAllRestaurants } from "../../services/restaurants/RestaurantServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useMediaQuery } from "@mui/material";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState();
  const [swiperInstance, setSwiperInstance] = useState();

  const isTabletLandscape = useMediaQuery('(max-width: 1074px)');
  const isTabletPortrait = useMediaQuery('(max-width: 890px)');
  const isMobile = useMediaQuery('(max-width: 500px)')


  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  useEffect(() => {
    getRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRestaurants = async () => {
    const response = await getAllRestaurants({
      locationId: 14,
    });
    setRestaurants(response.restaurants);
  };

  return (
    <div className="max-w-screen-lg mx-auto w-full">
      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : isTabletPortrait ? 2 : isTabletLandscape ? 3 : 4}
      >
        {restaurants?.map((data, i) => {
          const restaurant = data.restaurant;
          return (
            <SwiperSlide key={i}>
              <a className='' href={restaurant?.url} target="_blank" rel="noreferrer">
                <div className="h-44 w-64 overflow-hidden rounded-md mr-7">
                  <img
                    src={restaurant?.featured_image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-semibold text-md text-gray-900">
                  {restaurant?.name}
                </p>

                {/* <p>{`Address: ${restaurant?.location?.address}`}</p> */}

                {/* <p>{`Contact: ${restaurant?.phone_numbers}`}</p> */}

                {/* <p>{`Timings: ${restaurant?.timings}`}</p> */}

                {/* <p className="text-gray-700 font-normal">{`Ratings: ${restaurant?.user_rating?.aggregate_rating}`}</p> */}
                <p className="text-gray-700 font-normal">{`Location: ${restaurant?.location?.locality_verbose}`}</p>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RestaurantList;

//  <Swiper
//         onSwiper={(swiper) => {
//           setSwiperInstance(swiper);
//         }}
//         spaceBetween={50}
//         // slidesPerView={showSliderShowOneSlide ? 1 : 2}
//         slidesPerView={2}
//       >
//         {restaurants?.map((data, i) => {
//           const restaurant = data.restaurant;
//           console.log(restaurant);
//           return (
//             <SwiperSlide key={i}>
//               <a href={restaurant?.url} target="_blank" rel="noreferrer">
//                 <div className="h-44 w-60 overflow-hidden rounded-md mr-7">
//                   <img
//                     src={restaurant?.featured_image}
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <p className="font-semibold text-md text-gray-900">
//                   {restaurant?.name}
//                 </p>

//                 {/* <p>{`Address: ${restaurant?.location?.address}`}</p> */}

//                 {/* <p>{`Contact: ${restaurant?.phone_numbers}`}</p> */}

//                 {/* <p>{`Timings: ${restaurant?.timings}`}</p> */}

//                 {/* <p className="text-gray-700 font-normal">{`Ratings: ${restaurant?.user_rating?.aggregate_rating}`}</p> */}
//                 <p className="text-gray-700 font-normal">{`Location: ${restaurant?.location?.locality_verbose}`}</p>
//               </a>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
