"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// You need to replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const defaultCenter = {
  lat: 40.7128, // Default to New York City
  lng: -74.006,
};

export function ContactFormWithLocationMapComponent() {
  const [center, setCenter] = useState(defaultCenter);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.log("Unable to retrieve your location");
        }
      );
    } else {
      console.log("Geolocation not available");
    }
  }, []);

  const onLoad = (map: any) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1b2e]">
      <div className="w-full max-w-4xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Contact <span className="text-[#4fd1c5]">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First Name"
                className="bg-[#2d2b3e] text-white border-none"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-[#2d2b3e] text-white border-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Mobile No."
                className="bg-[#2d2b3e] text-white border-none"
              />
              <Input
                type="email"
                placeholder="Email ID."
                className="bg-[#2d2b3e] text-white border-none"
              />
            </div>
            <Textarea
              placeholder="Message"
              className="bg-[#2d2b3e] text-white border-none h-32"
            />
          </form>
          <div className="bg-[#2d2b3e] rounded-lg overflow-hidden">
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}
