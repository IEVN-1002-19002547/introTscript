

//VARIABLES

var num1 = 1; //VARIABLE GLOBAL PARA TODO EL PROGRAMA, NO SE RECOMIENDA SU USO
let num2 = 5; //VARIABLE LOCAL PARA SOLO UN METODO
const num3 = 4; //CONSTANTE, SE ESPERA QUE NO CAMBIEN

//SE RECOMIENDA EL USO DE LET PARA LAS VARIABLES
let nombre:string='Francisco';
let num:number = 23;
let activo:boolean = true;

//SE PUEDEN ASIGNAR VARIOS TIPOS A UNA MISMA VARIABLE
let matricula:number | string | boolean;

//USO DE LA VARIABLE SEGUN SU TIPO
matricula = 19002547;
matricula = 'ywt-2882';
matricula = false;