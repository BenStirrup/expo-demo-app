import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.MAPBOX_TOKEN || "";

export default function MapboxMapWeb() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}
