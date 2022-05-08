import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";
import Auth from "./auth.routes";
import Tab from "./tab.routes";


const IndexRoutes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <Auth /> : <Tab />}
    </NavigationContainer>
  )
}

export default IndexRoutes;
