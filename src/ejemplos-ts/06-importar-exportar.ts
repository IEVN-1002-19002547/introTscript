import { Producto, calculaIVA2 } from "./05-desestructurar-funciones";



const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:8738
    },
    {
        desc:'Telefono2',
        precio:956
    },
    {
        desc:'Telefono3',
        precio:40
    }
]

const [total3, iva3]=calculaIVA2(carrito);
console.log(`Total: ${total3}`)
console.log(`IVA: ${iva3}`)