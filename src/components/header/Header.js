import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Header = () => {
  return (
    <View style={{ marginBottom: 55 }}>
      <ImageBackground
        style={{ height: 200, resizeMode: "contain" }}
        source={{
          uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00022376.jpg?v=4",
        }}
      >
        <Pressable
          style={{
            height: 90,
            width: "90%",
            backgroundColor: "white",
            top: 160,
            padding: 10,
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Phát hành 1 ngày
              </Text>
              <Text
                style={{ marginVertical: 5, fontSize: 16, fontWeight: "700" }}
              >
                CUSTODY
              </Text>
              <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
                U.A - TELUGU
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text>Đặt vé</Text>
            </Pressable>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
