import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact</h1>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>

      <MapContainer
        center={[28.1, -15.4]}
        zoom={12}
        style={{ height: "300px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.1, -15.4]} />
      </MapContainer>

    </div>
  );
}

export default Contact;
