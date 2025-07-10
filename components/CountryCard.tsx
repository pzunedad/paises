import { FunctionalComponent } from "preact/src/index.d.ts";
import { Pais } from "../utils/types.ts";

type Data = {
    country: Pais[]
}

const CountryCard:FunctionalComponent<Data> = (props) => {
    return (
        <div class="grid">
            {props.country.map(e =>
                <div key={e.name} class="card">
                    <a href={`countries/${e.name}`}>
                        <img src={e.flag} alt={e.name} width="100px"/>
                    </a>
                    <div class="card-info">
                        <a href={`countries/${e.name}`} class="name">{e.name}</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CountryCard;