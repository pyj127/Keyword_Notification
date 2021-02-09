"use strict";

const db=require("../config/db");

class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx=users.id.indexOf(id); // => "id","psword","email"
        const usersKeys=Object.keys(users);

        const userInfo=usersKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields){
       
    }

    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM user WHERE u_id=?",[id],(err, data)=>{
                if(err) reject(err);
                console.log(data[0]);
                resolve(data[0]);
            });
        });   
    }

    static async save(userInfo){
       

    }

}

module.exports=UserStorage;