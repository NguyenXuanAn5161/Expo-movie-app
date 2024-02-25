import { StyleSheet } from "react-native";
import { PlaceContext } from "./src/context/PlaceContext";
import Navigation from "./src/navigation/StackNavigation";

export default function App() {
  return (
    <>
      <PlaceContext>
        <Navigation />
      </PlaceContext>
    </>
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
