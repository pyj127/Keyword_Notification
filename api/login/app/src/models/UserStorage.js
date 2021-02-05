"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx=users.id.indexOf(id); // => "id","psword","name"
        const usersKeys=Object.keys(users);

        const userInfo=usersKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }

    static getUsers(...fields){
        //const users= this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        //const users=this.#users;
        //julie : database 명, users.json : table
        return fs.readFile("./src/database/users.json")
         .then((data)=>{
            return this.#getUserInfo(data, id);
        })
         .catch((err) => console.error(err));

    }

    static save(userInfo){
        //const users=this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }

}

module.exports=UserStorage;