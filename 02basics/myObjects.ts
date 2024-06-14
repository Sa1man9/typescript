const User={
    name:"salman",
    email:"salman@gmail.com",
    isActive:true
}

// function createUser({name:string, isPaid:boolean}){

// }
// let newUser= {name:"salman",isPaid:true,email:"salman@gmail.com"}   
// createUser(newUser)

function createCourse():{name:string, price:number}{
    return {name:"react",price:399}
}


// type User={
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// function createUser(user:User): User{
//     return {name:"",email:"",isActive:true}
// }
// createUser({name:"",email:"",isActive:true})

type User={
    readonly _id:string 
    name:string
    email:string
    isActive:boolean
    creditCard? : number
}

let myUser :User ={
    _id:"1234",
    name:"s",
    email:"s@s.com",
    isActive:false
}

type cardNumber ={
    cardnumber:string,
}

type cardDate ={
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

myUser.email="salman@gmail.com";
// myUser._id ="12";


export{}

