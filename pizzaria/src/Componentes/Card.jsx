import React, {useState} from "react"
import Cuma from "../assets/imagens/cuma.png"


function Card(){
  const [pizza, setPizza] = useState("");
  const [pizzaImagem, setPizzaImagem] = useState("");
  const pizzaCuma =()=>{
    setPizza("La Cuma")
    setPizzaImagem(Cuma)
  }
  return(
    <main>
      <h2>Escolha o seu pedido</h2>
      <h3>{pizza}</h3>
      <img src={pizzaImagem} alt = "Pizza"/>
      <section>
        <div className = "card">
          <img className = "imagem" src={Cuma} alt="Pizza"/>
          <h4>La Cuma</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>R$ 23</h3>
          <button onClick={pizzaCuma}>Comprar Agora</button>
        </div>
        <div className = "card">
          <img className = "imagem" src={Cuma} alt="Pizza"/>
          <h4>La Cuma</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>R$ 23</h3>
          <button>Comprar Agora</button>
        </div>
      </section>
    </main>
  )
}

export default Card