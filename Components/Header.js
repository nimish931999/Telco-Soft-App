import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://telco-soft.com/assets/images/logo-1-424x80.png",
        }}
        style={styles.img}
      ></Image>
      {/* <Text>Portfolio</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 300,
    maxWidth: "80%",
    flex: 1,
    flexDirection: "row",
    alignItems:"center",
},
  img: {
    width: 200,
    height: 175,
    resizeMode: "contain",
  },
});
export default Header;
