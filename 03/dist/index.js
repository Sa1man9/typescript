"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Allahabad";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("courseCount should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const salman = new User("salman", "salman@gmail.com");
