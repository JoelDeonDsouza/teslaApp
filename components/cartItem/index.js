import React from "react";
import { StyleSheet, Text, View, ImageBackground, LogBox } from "react-native";
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
      <View style={styles.btnContainer}>
        <Btn
          btnType="initial"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom");
          }}
        />
        <Btn
          btnType="second"
          content={"Pre-Order"}
          onPress={() => {
            console.warn("Pre-Order");
          }}
        />
      </View>
    </View>
  );
};

export default CartItem;
