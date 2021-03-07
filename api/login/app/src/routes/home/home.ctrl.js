"use strict";

const User = require("../../models/User");
const db=require("../../config/db");
const KeyStorage=require("../../models/KeyStorage");
const output ={
    hello: (req,res)=>{
        res.render("home/index");
    },

    login: (req,res)=>{
        res.render("home/login");
    },

    register: (req,res)=>{
        res.render("home/register");
    }

};

const process = {
    login : async (req, res) => {
        const user=new User(req);
        const response=await user.login();
        return res.json(response);
    },
    register : async (req, res) => {
        const user=new User(req);
        const response=await user.register();
        return res.json(response);
    },
    logout : async (req, res)=>{
        let response;
        if(req.session.u_id){
            response={ success : true, id : req.session.u_id, msg : "로그아웃 성공"};
            console.log(response);
            req.session.destroy(
                function(err){
                    if(err) console.log('세션 삭제 실패\n'+err);
                }
            );
        }
        else{
            response={ success : false, msg : "로그인 되어 있지 않은 사용자입니다."};
            console.log(response);
        }
        return res.json(response);
    },
    addKey : async (req, res)=>{
        let response;
        const client=req.body;
        let p_id;
        let u_id;
        let k_id;
        if(req.session.u_id){
            u_id=req.session.u_id;
            try{
                p_id = await KeyStorage.getPageInfo(client.p_name);
                k_id = await KeyStorage.saveKey(client, req.session);
                response = await KeyStorage.saveAll(u_id, p_id, k_id);
                console.log(response);
            }catch(err){
                response=err;
                console.log(response);
            }
        }
        else{
            response={ success : false, msg : "로그인 되어 있지 않은 사용자입니다."};
            console.log(response);
            return res.json(response);
        }
        return res.json(response);
    },
    deleteKey : async (req, res)=>{
        let response;
        if(req.session.u_id){
            try{
                response=await KeyStorage.deleteReg(req.body.r_id);
                console.log(response);
            }catch(err){
                response=err;
                console.log(response);
            }
        }
        else{
            response={ success : false, msg : "로그인 되어 있지 않은 사용자입니다."};
            console.log(response);
        }
        return res.json(response);
    },
    
};

module.exports={
    output,
    process
};