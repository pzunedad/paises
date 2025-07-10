import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { searchCountry } from "../utils/API.ts";
import { Pais } from "../utils/types.ts";
import CountryCard from "../components/CountryCard.tsx";

// Busqueda.tsx
const Busqueda: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [countries, setCountries] = useState<Pais[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleInput = async (e: Event) => {
    const searchText = (e.target as HTMLInputElement).value;
    setName(searchText);
    
    if (searchText.trim() === "") {
      setCountries([]);
      return;
    }
    
    setIsSearching(true);
    try {
      const results = await searchCountry(searchText);
      setCountries(results || []);
    } catch (error) {
      console.error(error);
      setCountries([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onInput={handleInput}
        placeholder="Buscar por nombre de país..."
        class="search-input"
      />
      {isSearching ? (
        <p>Buscando...</p>
      ) : countries.length > 0 ? (
        <CountryCard country={countries} />
      ) : name && (
        <p>No se encontraron países con ese nombre</p>
      )}
    </div>
  );
};

export default Busqueda