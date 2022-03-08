import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TeslaList from "./components/list";
import Nav from "./components/nav";
export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <TeslaList />
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
});
