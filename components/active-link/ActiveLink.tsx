'use client'; //ponemos al inicio use cliente para que no sea un sever component ya que al incluir un Hook no puede crearse del lado del servidor

import Link from "next/link";

//importamos los estilos de la clase de module.css creada en este directorio
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

//interface para tipar las Props que recibimos
interface Props {
    path: string;
    text: string;
}

//recibimos las props y las desestructuramos en path y text
export const ActiveLink = ({ path,text}:Props) => {

    //creamos un Hook llamado usePathname de React para saber que pagina esta activa
    //al usar un Hook ya no podemos usar un server Component, de lado del servidor
    //al usar el Hook debemos usar use client para que no se cree del lado del servidor
    //debemos poner use client al inicio del archivo
    const pathName = usePathname();
  return (
    //usamos las props recibidas y aplicamos los estilos importados arriba en la variable styles creada
    //la variable active-link la ponemos entre corchertes porque no esta bien formada la variable ya que lleva un guion
    //concatenamos los estilos con bagtips ``y para el active-link ponemos la condicion de que si coincide con 
    //el path que se muestra, en el path que estamos -> pathName === path use el estilo active-link
    <Link className={ `${style.link} ${ (pathName === path) && style['active-link']}`} href={ path}> { text }</Link>
  )
}
