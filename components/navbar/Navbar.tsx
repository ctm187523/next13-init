
//con el snippet rafc, creamos el functionalComponent
//instalamos el siguiente paquete para manejar los iconos -> npm i @primer/octicons-react
//los iconos los obtenemos de la web -> https://primer.style/foundations/icons

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

//creamos un arreglo con los items que vamos a usar para la navegacion
const navItems = [
    { path: '/about', text: 'About'},
    { path: '/pricing', text: 'Pricing'},
    { path: '/contact', text: 'Contact'},
]

export const Navbar = () => {

    //console.log('Navbar creado'); //no aparece en la consola del navegador aparece en la consola donde se ejecuta la aplicacion(el servidor)
  return (
    // usamos tailwind para crear el navbar
   <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        
        <Link href={'/'} className="flex items-center">
            {/* usamos el icono importado arriba ver referencias en los comentarios */}
            {/* le ponemos un margin right -2 */}
            <HomeIcon className="mr-2"/> 
            <span>Home</span>
        </Link>
        
        
        {/* con flex flex-1 hacemos que tome el espacio del nav y se vaya al final los siguientes enlaces */}
        <div className="flex flex-1"></div>

        {/* usamos link en lugar del tag a, ya que el tag a cada vez que hacemos click 
        refresca la pagina y no es lo que queremos, en su lugar usamos Link
        lo comentamos porque abajo lo usamos usando el arreglo de arriba navItems
        */}
        {/* <Link className="mr-2" href="/about">About</Link>
        <Link className="mr-2" href="/pricing">Pricing</Link>
        <Link className="mr-2" href="/contact">Contact</Link> */}

        
        {/* usamos las llaves ya que usamos codigo en lugar de html 
          usamos la clase creada ActiveLink para manejar los Links
        */}
        {
            navItems.map ( navItem => (
               <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text} />
               
               //tambien podemos poner para pasar las props desestructurando lo que viene de navItem
               //<ActiveLink key={navItem.path} { ...navItem} />
            ))
        }
   </nav> 
  )
}
