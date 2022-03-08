import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

const Nav = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../../assets/images/menu.png")}
      />
    </View>
  );
};

export default Nav;
