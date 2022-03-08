import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const Btn = (props) => {
  const btnType = props.btnType;
  console.warn(btnType);

  const backgroundColor = btnType === "initial" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = btnType === "initial" ? "#FFF" : "#141E27";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("Details Page");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default Btn;
