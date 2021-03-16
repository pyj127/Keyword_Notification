"use strict";

const { resolveCname } = require("dns");
const db=require("../config/db");

class PostStorage{

    static async getPortal(){
        const portalLink="https://www.ajou.ac.kr/kr/ajou/notice.do";
        return new Promise((resolve, reject)=>{
            db.query("select title, content, link, updateDate from crawl_data where link like ? order by d_id desc limit 3",['%'+portalLink+'%'], (err,data)=>{
                if(data.length==0) {reject({success: false, msg: "crawl data 조회 실패"});}
                else{
                    console.log(data);

                    resolve({success : true, data:data});
                }
               if(err){
                reject({success: false, msg: err});
               }
            });
        });
    }
    

}

module.exports=PostStorage;