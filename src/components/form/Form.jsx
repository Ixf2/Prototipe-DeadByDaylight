import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import"../form/Form.css"

function Form() {
  return (
   <>
    <form id="form-box">
      <div className="part-form">
        <label for="user">User</label>
        <input type="text" id="user-form" name="user" required/>

        <label form="email-form">Email</label>
        <input type="email" id="email-form" required />

        <input type="submit" value="Send" />
        <input type="reset" value="Reset" />
      </div>
    </form>
   </>
  );
}

export default Form;
