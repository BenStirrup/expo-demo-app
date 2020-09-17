import MapboxGLNative from "@react-native-mapbox-gl/maps";
import React from "react";
import env from "react-native-dotenv";

MapboxGLNative.setAccessToken(env.MAPBOX_TOKEN);
MapboxGLNative.setTelemetryEnabled(false);

export default function MapboxMapNative() {
  return <MapboxGLNative.MapView style={{ flex: 1 }} />;
}
