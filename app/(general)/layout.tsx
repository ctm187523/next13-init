
//creamos un layout que ira anidado al layout principal RootLayout
//queremos este layout para las paginas,about y pricing no para la pagina home
//metemos todas estas paginas en la carpeta creada general que puede tener cualquier nombre
//es un High order componet ya que tenemos un children que sera la pagina donde usamos este layout
//la carpeta creada general la ponemos entre parentesis y de esta manera pro ejemplo para la url de contact

import { Navbar } from "@/components";

//ponemos -> http://localhost:3000/about, si no estarian los parentesis deberiamos poner -> http://localhost:3000/general/about
export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* usamos el Navbar creado en la carpeta components */}
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo desde el general layout</span>
        {children}
      </main>
    </>

  );
}