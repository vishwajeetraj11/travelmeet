import React from 'react'
import { NavigationBar } from '../components/layout/Navigation'
import RestaurantList from '../components/restaurants/RestaurantList'
import { SearchBar } from '../components/SearchBar'

const Explore = () => {
    return (
        <>
        <NavigationBar />
        <div className="max-w-screen-lg mx-auto w-full">  
            <div className="pt-8"><SearchBar /></div>
            <div className="pt-16"><RestaurantList /></div>            
        </div>           
        </>
    )
}

export default Explore
