import React from "react";
import { LogoutButton } from "../components/auth0/LogoutButton";
import { NavigationBar } from "../components/layout/Navigation";
import RestaurantList from "../components/restaurants/RestaurantList";

export const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <h1 className="text-center text-h1 text-semibold text-gray-900">
        Dashboard Page
      </h1>
      <LogoutButton />
      {/* <RestaurantList /> */}
    </div>
  );
};
