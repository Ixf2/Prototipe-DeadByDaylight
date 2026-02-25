import { useMemo, useState } from "react";
import Card from "../../components/card/Card";
import killers from "../../data/json/Killers.json";
import "./Killers.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoadingScreen from '../../components/loadingscreen/LoadingScreen.jsx';

const Killers = () => {
  const [search, setSearch] = useState("");

  const filteredKillers = useMemo(() => {
    const q = search.trim().toLowerCase();

 
    if (!q) return killers;

    return killers.filter((killer) => {
      const perks = [
        killer["name-perk1"],
        killer["name-perk2"],
        killer["name-perk3"],
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
        <h2 className="title-cards">Killers DBD</h2>

        {/* Buscador */}
        <div style={{ margin: "12px 0" }}>
          <input
            type="text"
            placeholder="Search the perk (ej: Agitation)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: 8, width: "min(420px, 100%)" }}
          />
        </div>

        {/* Resultado */}
        <div className="content-information-cards">
          {filteredKillers.map((killer) => (
            <Card
              key={killer.id}
              title={killer.title}
              image={
                new URL(
                  `../../data/images/characters-killers/${killer.image}`,
                  import.meta.url
                ).href
              }
              description={killer.description}
            />
          ))}
        </div>

        {/* Mensaje si no hay coincidencias */}
        {filteredKillers.length === 0 && (
          <p style={{ marginTop: 12 }}>There are no killers with that perk.</p>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Killers;