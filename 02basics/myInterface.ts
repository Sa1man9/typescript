interface User1{
    readonly dbId:number
    email:string,
    userId:number
    googleId?:string
    // startTrial:()=> string
    startTrial(): string
    getCoupon(couponName:string, value:number):number
}

interface User1{
    gitHubtoken:string
}

interface Admin1 extends User1 {
role: "admin"|"ta"|"learner"
}


const salman :Admin1 ={dbId:221,email:"s",userId:21,
    startTrial: ()=>{
        return "trial started"
    },
    getCoupon:(name:"salman", off:10)=>{
        return 10
    },
    gitHubtoken:"ssss",
    role:"admin"
}

salman.email="salman@gmail.com"