// class User {
//     public email:string
//     name:string
//     private readonly city: string="Allahabad"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name
//     }
// }

class User {

    protected _courseCount =1
    readonly city: string="Allahabad"
    constructor(
        public email:string,
        public name:string,
    ){
    }

    private deleteToken(){
        console.log("token deleted")
    }

    get getAppleEmail() :string{
        return `apple ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNumber){
        if(courseNumber<=1){
            throw new Error("courseCount should be more than 1")
        }
        this._courseCount=courseNumber;
    }
}

class SubUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}





const salman= new User("salman","salman@gmail.com")
