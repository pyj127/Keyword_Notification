"use strict";

const { resolveCname } = require("dns");
const db=require("../config/db");

class KeyStorage{
    

    static async getPageInfo(p_name){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM page WHERE p_name=?;",[p_name],(err, data)=>{
                if(data.length==0) {reject({success: false, msg: "해당 페이지는 제공하고 있지 않습니다."});}
                else{
                    resolve(data[0].p_id);
                }
               if(err){
                reject({success: false, msg: err});
               }
            });
        });   
    }

    static async saveKey(client, session){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM keyword WHERE u_id=? AND keyword=?", [session.u_id, client.keyword], (err,data)=>{
                if(data.length==0){
                    db.query("INSERT INTO keyword(keyword,u_id) VALUES(?,?);",
                        [client.keyword, session.u_id],
                        (err, data)=>{
                        if(err) reject({success: false, msg: err});
                        else{resolve(data.insertId);}
                    });
                }
                else{
                    console.log(session.u_id+"님은 이미 "+client.keyword+" 키워드를 가지고 있습니다.");
                    resolve(data[0].k_id);
                }
            });
        });   

    }

    static async saveAll(u_id, p_id, k_id){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM registration WHERE u_id=? AND p_id=? AND k_id=?", [u_id,p_id,k_id], (err,data)=>{
                if(data.length==0){
                    db.query("INSERT INTO registration(u_id, p_id, k_id) VALUES(?,?,?);",
                        [u_id, p_id, k_id],
                        (err, data)=>{
                        if(err) reject({success: false, msg: err});
                        else{resolve({ msg : "u_id, p_id, k_id are saved successfully", r_id : data.insertId });}
                    });
                }
                else{
                    console.log("이미 해당 registration은 저장되어 있습니다.");
                    reject({ success : false, msg : "이미 해당 registration은 저장되어 있습니다.", r_id : data[0].r_id});
                }
            });
        });   

    }

}

module.exports=KeyStorage;