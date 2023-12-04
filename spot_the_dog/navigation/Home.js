import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "./screens/Profile";
import Map from "./screens/Map";
import Forum from "./screens/Forum";
import ActualProfile from "./screens/ProfileScreen";

const playlists = "Profile";
const map = "Map";
const forum = "Forum";
const actualProfile = "actualProfile";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={playlists}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Corrected assignment here
            if (route.name === playlists) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name == map) {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name == forum) {
              iconName = focused ? "settings" : "settings-outline";
            } else {
              iconName = focused ? "home" : "home-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Set headerShown to false to hide the header for all screens
          headerShown: false,
        })}
      >
        <Tab.Screen name={playlists} component={Profile} />
        <Tab.Screen name={map} component={Map} />
        <Tab.Screen name={forum} component={Forum} />
        <Tab.Screen name={actualProfile} component={ActualProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
