import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DiscountScreen from "../screens/discount/DiscountScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import TheaterScreen from "../screens/theater/TheaterScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#FE4A4B",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Theater"
          component={TheaterScreen}
          options={{
            tabBarLabel: "Theater",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="movie-search"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discount"
          component={DiscountScreen}
          options={{
            tabBarLabel: "Discount",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="discount" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
