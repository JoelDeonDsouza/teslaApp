import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Btn from "../button";
import styles from "./styles";

const CartItem = () => {
  return (
    <View style={styles.contain}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.img}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Staring at €69,000</Text>
      </View>
      <Btn btnType="second" />
    </View>
  );
};

export default CartItem;
