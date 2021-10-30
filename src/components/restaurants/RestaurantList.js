import React, { useState, useEffect } from "react";
import { getAllRestaurants } from "../../services/restaurants/RestaurantService";


const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState();

    useEffect(() => {
        getRestaurants();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRestaurants = async () => {

        const response = await getAllRestaurants({
            locationId: 3550,
        });

        setRestaurants(response.restaurants);
    };

    return (
        <div style={{ width: "100%" }}>

            {restaurants?.map((data) => {
                const restaurant = data.restaurant;
                console.log(restaurant);
                return (
                    <>
                        <img src={restaurant?.featured_image} alt='' />

                        {restaurant?.name}

                        {`Address: ${restaurant?.location?.address}`}
                        <br />
                        {`Contact: ${restaurant?.phone_numbers}`}
                        <br />
                        {`Timings: ${restaurant?.timings}`}
                        <br />
                        {`Ratings: ${restaurant?.user_rating?.aggregate_rating}`}
                    </>
                );
            })}
        </div>
    );
};

export default RestaurantList;
