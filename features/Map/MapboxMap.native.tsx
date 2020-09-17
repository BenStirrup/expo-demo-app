import MapboxGLNative from "@react-native-mapbox-gl/maps";
import React from "react";
import Config from "react-native-config";

MapboxGLNative.setAccessToken(Config.MAPBOX_TOKEN);
MapboxGLNative.setTelemetryEnabled(false);

export default function MapboxMapNative() {
  return <MapboxGLNative.MapView style={{ flex: 1 }} />;
}
