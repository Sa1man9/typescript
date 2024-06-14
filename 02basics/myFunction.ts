function addTwo(num: number): number{
    return num +2;
    // return "hllo"
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUpUser(name : string,email :string,password :string){

}

let loginUser= (name:string, email:string, isPaid: boolean)=>{
    
}

function getValue (myVal : number)  {
    if(myVal>5){
        return true;
    }
    return "200 Ok"
}

const getHello =(s:string):string=>{
return "";
}

const heros=["thor", "spiderman", "ironman"];
// const heros=[1, 2, 3];

heros.map( (hero) : string => {
    return `hero is ${hero}`
})

let myValue=addTwo(5);
getUpper("salman")


function consoleError(errmsg:string) : void{
    console.log(errmsg)
}

function handleError(errmsg:string) : never{
    throw new Error(errmsg)
}

signUpUser("name","email","password")
loginUser("h","email",true);
export {}