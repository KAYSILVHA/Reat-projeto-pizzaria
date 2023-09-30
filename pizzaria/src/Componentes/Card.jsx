import React, { useState } from "react"
import Cuma from "../assets/imagens/cuma.png"
import Bana from "../assets/imagens/bana.png"
import Menta from "../assets/imagens/menta.png"
import Toca from "../assets/imagens/toca.png"


function Card() {
  const [selectedPizza, setSelectedPizza] = useState({});

  // simulando um banco de dados com todas as pizzas
  const pizzas = [
    {
      name: "La Cuma",
      price: 23,
      image: Cuma,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "La Bana",
      price: 23,
      image: Bana,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "La Menta",
      price: 23,
      image: Menta,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "La Toca",
      price: 23,
      image: Toca,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
  ]

  return (
    <main>
      <h2>Seu pedido é:</h2>
      <h3>{selectedPizza.name}</h3>
      <img src={selectedPizza.image} />
      <section>
        {
          pizzas.map((pizza) => (
            <div className="card">
              <img className="imagem" src={pizza.image} alt={`Pizza ${pizza.name}`} />
              <h4>{pizza.name}</h4>
              <p>{pizza.description}</p>
              <h3>{pizza.price}</h3>
              <button onClick={() => setSelectedPizza(pizza)}>Comprar Agora</button>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Card
