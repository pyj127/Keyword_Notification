"use strict";

class UserStorage{
    static #users = { //private
        id: ["julie0005", "julie232", "dulie"], //필드 : 필드 데이터
        psword: ["5252", "232", "ok"],
        name: ["김승은", "김승은2", "김승은3"],
    };

    static getUsers(...fields){
        const users= this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports=UserStorage;