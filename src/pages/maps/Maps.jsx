import { useEffect, useState } from "react";
import { fetchAllMaps, fetchMapsByCategory } from "../../services/MapsAPI";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Maps.css";
import LoadingScreen from "../../components/loadingscreen/LoadingScreen";

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
      <LoadingScreen/>
      <section id="cards">
        <h2 className="title-cards">Maps</h2>

        <div className="toolbar">
          <label className="toolbar-label" htmlFor="category">
            Category
          </label>

          <select
            id="category"
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="DLC">DLC</option>
            <option value="NOT DLC">NOT DLC</option>
            <option value="all">ALL</option>
          </select>
        </div>

        <div className="content-information-cards">
          {maps.map((map) => (
            <article className="card" key={map.id}>
              <img src={map.imageURL} alt={map.title} loading="lazy" />
              <div className="card-content">
                <h3>{map.title}</h3>
                <p>{map.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}