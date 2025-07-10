import { Pais } from "./types.ts";

export const getCountry = async ():Promise<Pais[]> => {
    const data = await fetch(`https://www.apicountries.com/countries`)
    const result: Pais[] = await data.json()
    const resultFinal: Pais[] = result.map(e => ({
        name: e.name,
        capital: e.capital,
        region: e.region,
        population: e.population,
        flag: e.flag
    }))
    return resultFinal
}

export const getCountryName = async(name:string): Promise<Pais> => {
    const data = await fetch(`https://www.apicountries.com/countries/name/${name}`)
    const result: Pais[] = await data.json()
    return ({
        name: result[0].name,
        capital: result[0].capital,
        region: result[0].region,
        population: result[0].population,
        flag: result[0].flag
    })
}

export const searchCountry = async (name: string): Promise<Pais[]> => {
    try {
        const data = await fetch(`https://www.apicountries.com/countries/name/${name}`);
        if (!data.ok) {
            throw new Error('No se encontraron países');
        }
        const result: Pais[] = await data.json();
        
        // Formatear los resultados igual que getCountry
        return result.map(e => ({
            name: e.name,
            capital: e.capital,
            region: e.region,
            population: e.population,
            flag: e.flag
        }));
    } catch (error) {
        console.error('Error searching countries:', error);
        return [];
    }
}