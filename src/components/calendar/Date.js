import moment from "moment";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Date = ({ onSelectDate, date, selected }) => {
  const day = moment(date).format("ddd");
  const dayNumber = moment(date).format("D");
  const fullDate = moment(date).format("YYYY-MM-DD");

  const handleSelectDate = () => {
    onSelectDate(fullDate);
  };

  return (
    <Pressable
      onPress={() => handleSelectDate()}
      style={[
        styles.container,
        selected === fullDate && { backgroundColor: "#28A745" },
      ]}
    >
      <Text
        style={[
          styles.day,
          selected === fullDate && {
            color: "#FFFFFF",
            fontWeight: "500",
          },
        ]}
      >
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.dayNumber,
          selected === fullDate && {
            color: "#FFFFFF",
            fontWeight: "500",
          },
        ]}
      >
        {dayNumber}
      </Text>
    </Pressable>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    borderColor: "#ddd",
    padding: 10,
    width: 70,
    height: 70,
    marginHorizontal: 6,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    fontSize: 14,
  },
  dayNumber: {
    fontSize: 14,
  },
});
