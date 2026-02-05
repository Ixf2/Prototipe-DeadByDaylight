import React from 'react'
import Card from '../../components/card/Card';
export const Survivors = () => {
    return (
        <section id="cards">
            <h2 className="title-cards">Survivors DBD</h2>

            <div className="content-information-cards">
                {survivors.map((survivors) => (
                    <Card
                        key={survivors.id}
                        title={survivors.title}
                        image={survivors.image}
                        description={survivors.description}
                        
                    />
                ))}
            </div>
        </section>
    )
}

export default Survivors;