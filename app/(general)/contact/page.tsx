import type{ Metadata } from "next"; //ponemos type porque no vamos a usar el objeto solo lo usamos para el tipado

//construimos las metadatas que aparecen en el head del html para que los boots
//puedan indexar las busquedas usamos el snipet mr para crear la metadata de manera rapida


//usamos la clase Metadata para el tipado
export const metadata: Metadata = {
 title: 'SEO Contact',  //cambiamos el titulo de la pestaña de la pagina
 description: 'Paginas para contacto', //cambiamos el cotenido de la metadata del Head description para facilitar la busqueda de los boots
};

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}