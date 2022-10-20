// ts es un superset de js
// POO
// Clase, interfaces, clases abstractas

class Articulo{
    titulo:string;
    autor:string;
    precio:number;
}

class Buscador{
    claveBusqueda: string;
    articulos: Articulo[];

    buscar():void {
        console.log(`Buscando con la clave ${this.claveBusqueda}`);
    }
}

// Definir un tipo de objeto
// En las interfaces se definen los atribudos separados por "," a diferencia de las clases que van con ";"
interface Producto{ 
    id:number,
    nombre:string,
}

function comprar(prod:Producto): void{

}

const unP:Producto = {
    id:1,
    nombre:'Papel'
}

comprar(unP);