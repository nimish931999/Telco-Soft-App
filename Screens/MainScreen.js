import React from "react";
import { StyleSheet, Text, ScrollView , View } from "react-native";
import Header from "../Components/Header";
const MainScreen = () => {
  return (
    <ScrollView>
      <Header />
    </ScrollView>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     // alignItems: "center",
  //     // justifyContent: "center",
  //   },
  //   header: {},
});
