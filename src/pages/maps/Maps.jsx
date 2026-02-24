import { useEffect, useState } from "react";
import { fetchAllMaps, fetchMapsByCategory } from "../../services/MapsAPI";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Maps() {
  const [category, setCategory] = useState("all");
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data =
        category === "all"
          ? await fetchAllMaps()
          : await fetchMapsByCategory(category);

      setMaps(data);
    }

    loadData();
  }, [category]);

  return (
    <>
      <Header/>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="DLC">DLC</option>
          <option value="NOT DLC">NOT DLC</option>
          <option value="all">ALL</option>
        </select>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {maps.map((map) => (
            <div key={map.id}>
              <img
                src={map.imageURL}
                alt={map.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{map.title}</h3>
              <p>{map.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer/>

    </>
  );
}

