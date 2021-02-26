"use strict";

const User = require("../../models/User");

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
        const user=new User(req.body);
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
    
};

module.exports={
    output,
    process
};