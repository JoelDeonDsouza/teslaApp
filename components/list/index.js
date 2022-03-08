import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CartItem from "../cartItem";
import car from "./carsList";
import styles from "./styles";

const TeslaList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={car}
        renderItem={({ item }) => <CartItem teslamodels={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default TeslaList;
