import { FunctionalComponent } from "preact/src/index.d.ts";
import { Pais } from "../utils/types.ts";

type Data = {
    country: Pais
}

const DetailCountry:FunctionalComponent<Data> = (props) => {
    return (
        <div class="detail">
            <img src={props.country.flag} alt={props.country.name} />
            <h2>{props.country.name}</h2>
            <p>Capital: {props.country.capital}</p>
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p>
            <a href={`/`}>Volver</a>
        </div>
    )
}

export default DetailCountry