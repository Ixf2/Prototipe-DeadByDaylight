import Card from "../../components/card/Card";
import killers from "../../data/json/Killers.json";
import "./Killers.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Killers = () => {
  return (
    <>
      <Header />
      <section id="cards">
        <h2 className="title-cards">Killers DBD</h2>

        <div className="content-information-cards">
          {killers.map((killer) => (
            <Card
              key={killer.id}
              title={killer.title}
              image={new URL(`../../data/images/characters-killers/${killer.image}`, import.meta.url).href}
              description={killer.description}

            />
          ))}
        </div>
      </section>
      <Footer />

    </>
  );
};

export default Killers;
