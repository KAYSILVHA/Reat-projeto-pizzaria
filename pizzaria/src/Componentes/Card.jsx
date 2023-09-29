import React, { useState } from "react"
import Cuma from "../assets/imagens/cuma.png"
import Bana from "../assets/imagens/bana.png"
import Menta from "../assets/imagens/menta.png"
import Toca from "../assets/imagens/toca.png"


function Card() {
  const [mensagem, setMensagem] = useState("")
  const [pizza, setPizza] = useState("");
  const [pizzaImagem, setPizzaImagem] = useState("");
  const pizzaCuma = () => {
    setTimeout(() => {
      setMensagem("Seu pedido é :")
      setPizza("La Cuma")
      setPizzaImagem(Cuma)
    }, 4000)
  }


  //setTimeout()
  //setTimeout(função, tempo)

  const pizzaBana = () => {
    setMensagem("Seu pedido é :")
    setPizza("La Bana")
    setPizzaImagem(Bana)
  }

  const pizzaMenta = () => {
    setMensagem("Seu pedido é :")
    setPizza("La Menta")
    setPizzaImagem(Menta)
  }

  const pizzaToca = () => {
    setMensagem("Seu pedido é :")
    setPizza("La Toca")
    setPizzaImagem(Toca)
  }
  return (
    <main>
      <h2>{mensagem}</h2>
      <h3>{pizza}</h3>
      <img src={pizzaImagem} />
      <section>
        <div className="card">
          <img className="imagem" src={Cuma} alt="Pizza" />
          <h4>La Cuma</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>R$ 23</h3>
          <button onClick={pizzaCuma}>Comprar Agora</button>
        </div>
        <div className="card">
          <img className="imagem" src={Menta} alt="Pizza" />
          <h4>La Menta</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>R$ 23</h3>
          <button onClick={pizzaMenta}>Comprar Agora</button>
        </div>
        <div className="card">
          <img className="imagem" src={Bana} alt="Pizza" />
          <h4>La Bana</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>R$ 23</h3>
          <button onClick={pizzaBana}>Comprar Agora</button>
        </div>
        <div className="card">
          <img className="imagem" src={Toca} alt="Pizza" />
          <h4>La Toca</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>R$ 23</h3>
          <button onClick={pizzaToca}>Comprar Agora</button>
        </div>
      </section>
    </main>
  )
}

export default Card