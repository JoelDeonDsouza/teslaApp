import React from "react";
import { StyleSheet, Text, View, ImageBackground, LogBox } from "react-native";
import Btn from "../button";
import styles from "./styles";

const CartItem = (props) => {
  const { name, tag, tagLink, image } = props.teslamodels;

  return (
    <View style={styles.contain}>
      <ImageBackground source={image} style={styles.img} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tag} <Text style={styles.subTitle2}>{tagLink}</Text>
        </Text>
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
