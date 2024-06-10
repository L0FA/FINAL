import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">a {item.distance}M del Centro</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Apartamento con Aire Acondicionado
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          Podes cancelar mas tarde, pero no pierdas el precio hoy!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excelente</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Impuestos Incluidos</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Ver Disponibilidad</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
