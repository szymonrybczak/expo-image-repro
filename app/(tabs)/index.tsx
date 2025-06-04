import { StyleSheet, View } from "react-native";

import { Image } from "expo-image";

function FirstScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn-bgp.bluestacks.com/BGP/pl/gametiles_com.facebook.katana.jpg",
        }}
        contentPosition={"bottom center"}
      />
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
  image: {
    aspectRatio: 1,
    width: "100%",
    borderRadius: 8,
  },
});
