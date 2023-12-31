import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

//layout principal de la aplicacion

//en la siguiente instruccion podemos cambiar al Fuente, por defecto viene Inter
//hemos cambiado la fuente de la letra a Montserrat, son fuentes de google fonts
//la volvemos a dejar a la que viene por defecto Inter
const inter = Inter({ subsets: ['latin'] })

//el titulo sale en la pestaña de la pagina web, la descirpcion en los metatags del head
//que es lo que leen los boots de google para la busquedas 
//podemos exportar el objeto creado metadata y si las demas paginas de la aplicacion
//no tienen metadatas se ponen la del layout principal RootLayout
export const metadata: Metadata = {
  title: "Pepe´s Home Page",
  description: 'Generated with the pepes',
}

//esta funcion del layout que se crea al crear la aplicacion seria un HighOrderComponent
//porque tenemos un children en su interior, componentes hijos de tipo React.ReactNode
//lo que pongamos en este Layout impacta en todas las paginas de la aplicacion
export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <span>Desde el RootLayout</span>
        {children}
      </body>
    </html>
  )
}
