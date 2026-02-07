import React from 'react'
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./Survivors.css";
import survivors from "../../data/json/Survivors.json";

export const Survivors = () => {
    return (
        <>
            <Header />
            <section id="cards">
                <h2 className="title-cards">Survivors DBD</h2>

                <div className="content-information-cards">
                    {survivors.map((survivors) => (
                        <Card
                            key={survivors.id}
                            title={survivors.title}
                            image={new URL(`../../data/images/charactert-survivors/${survivors.image}`, import.meta.url).href}
                            description={survivors.description}

                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Survivors;