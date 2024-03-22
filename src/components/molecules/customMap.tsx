import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface Props {
  location?: { lat?: number; lng?: number };
}

const CustomMap = (props: Props) => {
  const center: [number, number] = [51.505, -0.09];
  const zoom: number = 13;

  var LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: "leaf-shadow.png",
      iconSize: [33.52, 33.52],
      iconUrl: "/assets/icons/marker.png",
    },
  });
  var myIcon = new LeafIcon();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "670px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={myIcon} position={[51.505, -0.09]}>
        <Popup>آدرس</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
