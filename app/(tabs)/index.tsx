import { StyleSheet, View } from "react-native";

import { Image } from "expo-image";

function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-bgp.bluestacks.com/BGP/pl/gametiles_com.facebook.katana.jpg",
          }}
          contentPosition={"bottom center"}
        />
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return <FirstScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    margin: 4,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    borderRadius: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});
