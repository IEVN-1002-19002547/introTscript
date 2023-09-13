
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

//SE TIENE EL SIGUIENTE ARREGLO CON LOS SIGUIENTES DATOS
let mascotas:string[]= ['perro', 'gato', 'perico']

//HACE UPDATE AL NUMERO DE ELEMENTO INDICADO DE UN ARREGLO POR EL NUEVO VALOR ESPECIFICADO
mascotas[1] = 'perico verde';

//AGREGA UN NUEVO ELEMENTO CON UN ID NUEVO AL ARREGLO 
mascotas.push('gato dos');

//
console.table(mascotas);

//
let tem:(string|number)[] = [];
tem.push('RCR');
tem.push(34);

