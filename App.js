import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <ImageBackground
          source={require("./assets/images/ModelS.jpeg")}
          style={styles.img}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Staring at €69,000</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contain: {
    width: "100%",
    height: "100%",
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
});
