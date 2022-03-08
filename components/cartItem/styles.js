import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  contain: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitle2: {
    textDecorationLine: "underline",
  },
  btnContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
