import React from 'react'
import Card from '../../components/card/Card';
export const Killers = () => {
  return (
    <section id="cards">
      <h2 className="title-cards">Killers DBD</h2>

      <div className="content-information-cards">
        {killers.map((killer) => (
          <Card
            key={killer.id}
            title={killer.title}
            image={killer.image}
            description={killer.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Killers;