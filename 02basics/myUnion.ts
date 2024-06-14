let score: number | string=33

score=44
score="55"

// type User ={
// name:string,
// id:number,
// }

type Admin={
    username:string,
    id:number,
}

// let salman : User|Admin = {name:"salman", id:334}

// salman ={username:"sa", id:334}

function getDbId(id: number | string){
    console.log(`${id}`)
    if(typeof id ==='string'){
        id.toLowerCase()
    }
}

getDbId('3')
getDbId(3);


// array

const data : number[]= [1,2,3,]

const data2: (number | string)[]=['1','2',"3",5]

let pi:3.14 =3.14

let seatAllotment: "aisle"|"middle"|"window"
seatAllotment="aisle"