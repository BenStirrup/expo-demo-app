import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Platform, Text, View } from "react-native";

import MapboxMap from "./features/Map/MapboxMap";
import GoogleMap from "./features/Map/GoogleMap";

require("dotenv").config();

export default function App() {
  return (
    <View style={styles.root}>
      <Text>Demo App</Text>
      <View style={styles.mapContainer}>
        <Text>Mapbox</Text>
        <MapboxMap />
      </View>
      <View style={styles.mapContainer}>
        <Text>Google Maps</Text>
        <GoogleMap />
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
  mapContainer: {
    ...Platform.select({
      web: {
        height: 450,
        width: 450,
      },
      default: {
        height: 300,
        width: 300,
      },
    }),
  },
});
