"use strict";

const output ={
    hello: (req,res)=>{
        res.render("home/index");
    },

    login: (req,res)=>{
        res.render("home/login");
    },

};


const users = {
    id: ["julie0005", "julie232", "dulie"],
    psword: ["5252", "232", "ok"],

};

const process = {
    login : (req, res) => {
        const id=req.body.id;
        const psword=req.body.psword;
        
        if(users.id.includes(id)){
            const idx=users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success:false,
            msg: "로그인에 실패하였습니다.",
        })

    },
};

module.exports={
    output,
    process
};