import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import SuperheroCard from "./components/SuperheroCard";

export default function App() {
  const batmanData = {
    name: "Batman 🦇",
    image: require("./assets/batman.jpg"),
    age: 30,
    powers: ["Martial Arts", "Gadgets", "Intelligence"],
    occupation: "Billionaire",
    villain: ["Joker", "Penguinn"],
  };
  const supermanData = {
    name: "Superman 🦸‍♂️",
    image: require("./assets/Superman.png"),
    age: 29,
    powers: ["Heat Vision", "Cold Breath", "Strong"],
    occupation: "Reporter",
    villain: ["Lex Luthor", "Genaral Zod"],
  };
  const wanderwomenData = {
    name: "Wander Women 👸",
    image: require("./assets/wanderwoman.jpg"),
    age: 5000,
    powers: ["Martial Arts", "Lasso of truth", "Warrior"],
    occupation: "Princess",
    villain: ["Aris", "Some guy"],
  };
  const greenlanternData = {
    name: "Green Lantern 💍",
    image: require("./assets/GreenLantern.png"),
    age: 34,
    powers: ["Ring", "Will Power", "knowladge"],
    occupation: "Pilot",
    villain: ["Yello Lantern", "Red Lantern"],
  };
  const arrowData = {
    name: "Green Arrow 🏹",
    image: require("./assets/GreenArrow.jpg"),
    age: 32,
    powers: ["Martial Arts", "Bow & Arrow", "Intelligence"],
    occupation: "Billionaire",
    villain: ["Ras Al Gul", "IDK"],
  };
  const flashData = {
    name: "Flash 🏃‍♂️",
    image: require("./assets/flash.jpg"),
    age: 26,
    powers: ["Speed", "Time Traval", "Intelligence"],
    occupation: "Police",
    villain: ["Gorilla", "Zoom"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SuperheroCard {...batmanData} />
        <SuperheroCard {...supermanData} />
        <SuperheroCard {...wanderwomenData} />
        <SuperheroCard {...greenlanternData} />
        <SuperheroCard {...flashData} />
        <SuperheroCard {...arrowData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
