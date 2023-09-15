

export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony Erickson',
    precio:875
}
const tablet:Producto={
    desc:'Ipad Air',
    precio:1837
}


function calculaIVA1(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16
}
const articulos1=[telefono, tablet];
const iva1=calculaIVA1(articulos1);
console.log(`El IVA es ${iva1}`)


//
export function calculaIVA2(productos:Producto[]):[number, number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16]
}
const articulos2=[telefono, tablet];
const [total, iva2]=calculaIVA2(articulos2);
console.log(`El IVA es: $${iva2} y el total es: $${total}`)

