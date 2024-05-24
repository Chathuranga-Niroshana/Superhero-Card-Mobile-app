import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getOccupationDetails = (occupation) => {
  switch (occupation) {
    case "Billionaire":
      return { borderColor: "#FFD700", emoji: "💰" };
    case "Reporter":
      return { borderColor: "#6493EA", emoji: "📰" };
    case "Pilot":
      return { borderColor: "#FFC107", emoji: "✈️" };
    case "Princess":
      return { borderColor: "#FF69B4", emoji: "👸" };
    case "Police":
      return { borderColor: "#3498DB", emoji: "🚨" };
    default:
      return { borderColor: "#000", emoji: "❓" };
  }
};

export default function SuperheroCard({
  name,
  image,
  age,
  powers,
  occupation,
  villain,
}) {
  const { borderColor, emoji } = getOccupationDetails(occupation);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}  </Text>
        <Text style={styles.age}>{age}yrs </Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} superhero`}
        resizeMode="contain"
      />
      <View style={styles.occupationContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.occuEmogi}>{emoji}</Text>
          <Text style={styles.occupationText}>{occupation}</Text>
        </View>
      </View>
      <View style={styles.powerContainer}>
        <Text style={styles.powerText}>Powers: {powers.join(", ")}</Text>
      </View>
      <View style={styles.villainContainer}>
        <Text style={styles.villainText}>Villains: {villain.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowColor: "#333",
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  age: {
    fontSize: 15,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  occupationContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  occuEmogi: {
    fontSize: 30,
    marginRight: 12,
  },
  occupationText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  powerContainer: {
    marginBottom: 16,
  },
  powerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
  },
  villainContainer: {
    marginBottom: 8,
  },
  villainText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
});
