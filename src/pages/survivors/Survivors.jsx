import { useMemo, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Survivors.css";
import survivors from "../../data/json/Survivors.json";
import LoadingScreen from "../../components/loadingscreen/LoadingScreen";

export const Survivors = () => {
  const [search, setSearch] = useState("");

  const filteredSurvivors = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return survivors;

    return survivors.filter((survivor) => {
      const perks = [
        survivor["name-perk1"],
        survivor["name-perk2"],
        survivor["name-perk3"],
      ]
        .filter(Boolean)
        .map((p) => p.toLowerCase());

      return perks.some((perk) => perk.includes(q));
    });
  }, [search]);

  return (
    <>
      <Header />
        <LoadingScreen/>
      <section id="cards">
        <h2 className="title-cards">Survivors DBD</h2>

        <div style={{ margin: "12px 0" }}>
          <input
            type="text"
            placeholder="Buscar perk (ej: Adrenaline)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: 8, width: "min(420px, 100%)" }}
          />
        </div>

        <div className="content-information-cards">
          {filteredSurvivors.map((survivor) => (
            <Card
              key={survivor.id}
              title={survivor.title}
              image={
                new URL(
                  `../../data/images/charactert-survivors/${survivor.image}`,
                  import.meta.url
                ).href
              }
              description={survivor.description}
            />
          ))}
        </div>

        {filteredSurvivors.length === 0 && (
          <p style={{ marginTop: 12 }}>
            There are no survivors with that perk.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Survivors;