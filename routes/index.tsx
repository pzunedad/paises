import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CountryCard from "../components/CountryCard.tsx";
import Busqueda from "../islands/Busqueda.tsx"; // Asegúrate de que la ruta es correcta
import { getCountry } from "../utils/API.ts";
import { Pais } from "../utils/types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Pais[]>) => {
    const countries = await getCountry(); // Obtiene los países iniciales (ej: todos o algunos por defecto)
    return ctx.render(countries);
  },
};

export default function Home(props: PageProps<Pais[]>) {
  return (
    <div>
      <Busqueda />
      <CountryCard country={props.data}/>
    </div>
  );
}