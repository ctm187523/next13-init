
//construimos las metadatas que aparecen en el head del html para que los boots
//puedan indexar las busquedas usamos el snipet mr para crear la metadata de manera rapida

import type { Metadata } from "next"; //ponemos type porque no vamos a usar el objeto solo lo usamos para el tipado

//usamos la clase Metadata para el tipado
export const metadata: Metadata = {
    title: 'SEO Title',   //cambiamos el titulo de la pestaña de la pagina
    description: 'SEO Description', //cambiamos el cotenido de la metadata del Head description para facilitar la busqueda de los boots
    keywords: ['About Page', 'Pepe', 'informacion'] //creamos metatags adicionales
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About page</span>
    )
}