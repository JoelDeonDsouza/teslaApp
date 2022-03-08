import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const Btn = (props) => {
  // const btnType = props.btnType;
  // const content = props.content;
  // const onPress = props.onPress;
  //Easy waybelow//
  const { btnType, content, onPress } = props;

  const backgroundColor = btnType === "initial" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = btnType === "initial" ? "#FFF" : "#141E27";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Btn;
