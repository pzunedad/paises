import { Header } from "../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";


export default ({Component}:PageProps) => {
    return (
        <div>
            <Header/>
            <Component/>
        </div>
    )
}