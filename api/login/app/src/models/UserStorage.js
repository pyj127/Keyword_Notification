"use strict";

const { resolveCname } = require("dns");
const db=require("../config/db");

class UserStorage{
    

    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM user WHERE u_id=?;",[id],(err, data)=>{
                if(err) reject(`${err}`);
                if(data.length==0) {reject(false);}
                resolve(data[0]);
            });
        });   
    }

    static getRegInfo(u_id){
        return new Promise((resolve, reject)=>{
            let arr=[];
            db.query("SELECT * FROM registration WHERE u_id=?;",[u_id],(err, data)=>{
                if(err) reject(`${err}`);
                for(let i=0; i<data.length; i++){
                    arr[i]=data[i].r_id;
                }
                resolve(arr);
            });
        });
    }
    //아이디, 이메일 중복 체크해야.
    static getIdInfo(email){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM user WHERE email=?;",[email],(err, data)=>{
                if(err) reject(`${err}`);
                if(typeof data[0]=="undefined") reject(false);
                resolve(data[0].u_id);
            });
        });   
    }

    static getPassInfo(id){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM user WHERE u_id=?;",[id],(err, data)=>{
                if(err) reject(`${err}`);
                if(typeof data[0]=="undefined") reject(false);
                resolve(data[0].password);
            });
        });   
    }
    
    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            db.query("INSERT INTO user(u_id,email,password) VALUES(?,?,?);",
                [userInfo.id, userInfo.email, userInfo.psword],
                (err, data)=>{
                if(err) reject(`${err}`);
                resolve({ success : true });
            });
        });   
    }

    static async deleteAll(u_id){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM user WHERE u_id=?",[u_id],(err,data)=>{
                if(data.length==0){
                    console.log("해당 user은 존재하지 않습니다.");
                    reject({success : false, msg : "해당 user는 존재하지 않습니다."});
                }
                else{
                    db.query("DELETE FROM keyword WHERE u_id=?;DELETE FROM registration WHERE u_id=?;DELETE FROM user WHERE u_id=?;",[u_id,u_id,u_id],(err,data)=>{
                        if(err) reject({success:false,msg:err});
                        else{
                            console.log({success : true, msg: "성공적으로 삭제되었습니다.", u_id : u_id});
                            resolve({success : true,msg: "성공적으로 삭제되었습니다.", u_id : u_id});
                        };
                    })
                }
                if(err) reject({success:false, msg:err});
            });
            
        });
    }

}

module.exports=UserStorage;