const score :Array<number> = []
const names :Array<string> = []

function identityOne(val: boolean|number): boolean|number{
return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree("3")

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type: number
}

identityFour<Bottle>({
    brand:"cello",
    type:2
})

function getSearchProducts<T>(products: T[]):T{
    const i=3;
    return products[i]
}

const getMoreSearchProdducts=<T>(products:T[]):T=>{
    const i=0;
    return products[i];
}

interface Database{
    connection:string,
    userName:string,
    password:string
}

function anotherFunction<T,U extends Database>(val1:T,val2:U):object{
    return{
        val1,
        val2
    }
}

// anotherFunction(3,{

// })

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart: T[]=[]
    addToCart(products: T){
        this.cart.push(products)
    }
}

interface Circle{
    kind :"circle"
    radius:number
}

interface Square{
    kind : "square"
    side: number
}

interface Rectangle {
    kind :"rectangle"
    length:number,
    width:number
}

type Shape =Circle | Square |Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==="circle" ){
        return Math.PI *shape.radius ** 2;
    }
    // return shape.side *shape.side;
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI *shape.radius ** 2;
        case "square":
            return shape.side *shape.side;
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultForShape:never=shape
            return _defaultForShape
    }
}