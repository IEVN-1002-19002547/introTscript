
//PODEMOS ESTRUCTURAR VARIABLES SIN PONER TIPO DE DATOS,
//PERO NO SON BUENAS PRACTICAS
//const alumno={
   // nombre:'juan',
    //email:'juan@gmail.com'
//}

//INTERFACES PARA TIPAR DATOS, EL NOMBRE DE LA INTERFACE EMPIEZA POR 
//MAYUSCULA
interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
}

//NOS DA ERROR PORQUE INGRESAMOS UNA VARIABLE EN LA INTERFAZ 
//QUE NO UTILIZAMOS EN LOS DATOS INDICADOS, PARA SOLUCIONAR ESTO PODEMOS 
//INGRESAR CADA DATO CON UN VALOR O NO PONERLE UN '?' A LA VARIABLE EN 
//LA INTERFAZ
const alumno:Alumno={
    //matricula:19002547;
    nombre:'juan',
    email:'juan@gmail.com'
}

console.log(alumno.nombre);