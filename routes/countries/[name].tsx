import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import DetailCountry from "../../components/DetailCountry.tsx";
import { getCountryName } from "../../utils/API.ts";
import { Pais } from "../../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown,Pais>) => {
        const {name} = ctx.params
        const country = await getCountryName(name)
        return ctx.render(country)
    }
}

export default (props:PageProps<Pais>) => {
    return <DetailCountry country={props.data}/>
}