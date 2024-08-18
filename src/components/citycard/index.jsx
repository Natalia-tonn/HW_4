
import styles from "./styles.module.css"

function CityCard({ city }) {
    
    return (
        <div className="city-card">
        <h1>{city.name}</h1>
        <img src={city.imageUrl} alt="" />
  
        <ul>
          {city.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <p>{city.description}</p>
      </div>
    );
  }
  
  export default CityCard;



