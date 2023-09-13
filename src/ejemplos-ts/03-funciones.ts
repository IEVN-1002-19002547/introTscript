//PARA DEFINIR UNA FUNCION SE SIGUE LA SIGUIENTE ESTRUCTURA: FUNCION NOMBRE(PARAMETROS)
//EL TIPO VOID INDICA QUE LA FUNCION NO REGRESARA NINGUN VALOR

//
function suma():void{
    console.log(`La suma es ${3+5}`);
}
suma();

//
function suma2(a:number, b:number):void{
    console.log(`La suma es ${a+b}`);
}
const resultado2 = suma2(7, 8)
//console.log(resultado2)

//
function suma3(a:number, b:number):number{
    return a+b;
}
const resultado3 = suma3(10, 15)
//console.log(resultado)
console.log(`La suma es ${resultado3}`);

//
function multiplicar(n1:number, otronumber:number, base:number=7):number{
    let tem=n1*base;
    
    return tem;
}
console.log(multiplicar(3, 5))
console.log(multiplicar(3, 5, 2))

//
interface Mascotas{
    nombre:string,
    edad:number,
    mostrarEdad:()=>void;
}
function calcular(mascota:Mascotas, x:number):void{
    mascota.edad += x;
    console.log(mascota);
}
const nuevaMascota:Mascotas={
    nombre:'Eclipse',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ',this.edad)
    }
}
calcular(nuevaMascota,3);