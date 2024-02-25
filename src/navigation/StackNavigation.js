import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscountScreen from "../screens/discount/DiscountScreen";
import HomeScreen from "../screens/home/HomeScreen";
import PlaceScreen from "../screens/home/PlaceScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import TheatersScreen from "../screens/theater/TheaterScreen";

const HomeStack = createNativeStackNavigator();
const TheaterStack = createNativeStackNavigator();
const DiscountStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "" }}
      />
      <HomeStack.Screen name="Địa điểm" component={PlaceScreen} />
    </HomeStack.Navigator>
  );
};

const TheaterStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Theater" component={TheatersScreen} />
    </HomeStack.Navigator>
  );
};

const DiscountStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Discount" component={DiscountScreen} />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Account" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const Navigation = () => {
  // const getHeaderTitle = (route) => {
  //   const routeName = route.state
  //     ? route.state.routes[route.state.index].name
  //     : route.params?.screen || "Trang chủ";

  //   // Trả về tiêu đề tương ứng với tên màn hình
  //   switch (routeName) {
  //     case "Trang chủ":
  //       return "";
  //     case "Chọn rạp":
  //       return "Chọn rạp";
  //     case "Khuyến mãi":
  //       return "Khuyến mãi";
  //     case "Tài khoản":
  //       return "Tài khoản";
  //   }
  // };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Trang chủ"
        screenOptions={{
          tabBarActiveTintColor: "#FE4A4B",
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          component={HomeStackScreens}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Chọn rạp"
          component={TheaterStackScreens}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="movie-search"
                size={size}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Khuyến mãi"
          component={DiscountStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: "Khuyến mãi",
            tabBarLabelStyle: { color: "black" },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="discount" size={size} color={color} />
            ),
            // load động
            tabBarBadge: 4,
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={ProfileStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: "Tài khoản",
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
