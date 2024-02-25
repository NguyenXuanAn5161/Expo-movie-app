import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useLayoutEffect } from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Place } from "../../context/PlaceContext";

const PlaceScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({});
  }, []);

  const { selectedLocation, setSelectedLocation } = useContext(Place);

  const places = [
    {
      id: "0",
      place: "Bangalore",
      image:
        "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "1",
      place: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      place: "Chennai",
      image:
        "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      place: "Delhi - NCR",
      image:
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      place: "Hyderabad",
      image:
        "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      place: "Kolkata",
      image:
        "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      place: "Jaipur",
      image:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      place: "Lucknow",
      image:
        "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  const selectCity = (city) => {
    setSelectedLocation(city);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 800);
  };

  return (
    <View>
      <View
        style={{
          margin: 10,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 2,
          borderColor: "#e0e0e0",
          borderRadius: 30,
        }}
      >
        <TextInput placeholder="Chọn vị trí" />
        <Feather name="search" size={24} color="black" />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Chọn ví trí</Text>
        <Text>{selectedLocation}</Text>
      </View>
      <FlatList
        style={{ height: "85%" }}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        data={places}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => selectCity(item.place)}
            style={{ marginVertical: 10, marginHorizontal: 20 }}
          >
            <ImageBackground
              style={{ width: 160, height: 100, opacity: 0.8 }}
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 8 }}
            >
              {selectedLocation === item.place && (
                <View
                  style={{
                    flex: 1,
                    marginLeft: 7,
                    marginTop: 7,
                    alignContent: "flex-end",
                  }}
                >
                  <AntDesign name="checkcircle" size={24} color="white" />
                </View>
              )}
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  marginBottom: 7,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                >
                  {item.place}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({});
