import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Ahorra Tiempo y Dinero</h1>
      <span className="mailDesc">Inscribite para las mejores ofertas!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Tu Mail" />
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default MailList