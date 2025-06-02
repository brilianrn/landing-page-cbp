"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ICPin } from "public/assets/icons";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapsProps {
  position?: [number, number];
  zoom?: number;
  popUpText?: string;
}

export const Maps = ({
  position = [-7.4952943, 112.7221395],
  zoom = 17,
  popUpText = "Lokasi Toko Kami",
}: MapsProps) => {
  const [icon, setIcon] = useState<L.DivIcon>();
  const iconRef = useRef(document.createElement("div"));

  useEffect(() => {
    const root = createRoot(iconRef.current);
    root.render(<ICPin className="drop-shadow-md size-10" />);

    const customIcon = L.divIcon({
      html: iconRef.current,
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    setIcon(customIcon);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={position}
        zoom={zoom}
        touchZoom
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution="PT Cahaya Bangun Perkasa"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {icon && (
          <Marker position={position} icon={icon}>
            <Popup>{popUpText}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};
