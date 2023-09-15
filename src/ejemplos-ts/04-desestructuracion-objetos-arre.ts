

//DESESTRUCTURAR PARTE DE LA DEFINICION DE UN OBJETO
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen: 90,
    segundo: 66,
    cancion: "Mañanitas",
    detalles: {
        autor:'Cepillin',
        year: 1978,
    }
}
console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);

//DESESTRUCTURACION
const{volumen, segundo, cancion, detalles}=reproductor
const{autor}=detalles
console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`El cantante es: ${autor}`);

//TYPESCRIPT AL REALIZAR UNA TRANSPORTACION A JAVASCRIPT, NO PERMITE UTILIZAR
//UNA VARIABLE YA UTILIZADA DEL MISMO ARCHIVO O DE OTRO QUE YA CONTENGA UN VALOR
//let mascotas:string[]=[]

const colores:string[]=['blue', 'red', 'green', 'violet'];
console.log(`Color 1: ${colores[0]}`);
console.log(`Color 2: ${colores[1]}`);
console.log(`Color 3: ${colores[2]}`);

const[a,,,b]=colores;
console.log(`Color 2: ${b}`);