import env from "react-native-dotenv";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

MapboxGL.setAccessToken(env.MAPBOX_TOKEN);
MapboxGL.setTelemetryEnabled(false);

export default function App() {
  return (
    <View style={styles.root}>
      <Text>Demo App</Text>
      <View style={styles.mapContainer}>
        <Text>Mapbox</Text>
        <MapboxGL.MapView style={styles.map} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
  mapContainer: {
    height: 300,
    width: 300,
  },
});
