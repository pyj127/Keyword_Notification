"user strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(req){
        this.body=req.body;
        this.session=req.session;
    }

    //console.log(UserStorage.getUserInfo(client.id)) 에서 안에 있는 함수가
    //완료되기 전에 콘솔에 찍혀버림. (다 읽어오기 전에 찍는다.) -> 비동기 필요.
    //이중로그인 방지 필요.
    async login(){
        const client=this.body;
        try{
         const { u_id, password } = await UserStorage.getUserInfo(client.id);
            if(u_id){
                
                if(u_id=== client.id && password === client.psword){
                    this.session.logined=true;
                    this.session.u_id=u_id;
                    const arr=await UserStorage.getRegInfo(u_id);
                    console.log(arr);
                    return {success : true, r_id_arr : arr};
                }
                return { success:false, msg:"비밀번호가 틀렸습니다." };
            }
        }catch(e){
		console.log(e);
            return { success: false, msg: "존재하지 않는 아이디입니다.", err:e};
        }
    }

    async register(){
        const client=this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        } catch(err){
            return { success: false, msg: err };
        }
    }
    //request body 안에 email 정보 있어야.
    async findId(){
        const client=this.body;
        try{
            const u_id = await UserStorage.getIdInfo(client.email);
            if(u_id){
                return {success : true, id : u_id};
            }
        }catch(err){
            return {success : false, msg:"존재하지 않는 계정입니다."};
        }

    }
    //request body 안에 id 있어야.
    async findPw(){
        let i;
        const client=this.body;
        try{
            const password = await UserStorage.getPassInfo(client.id);
            if(password){
                let str='';
                for(i=0; i<password.length-2; i++){
                    str+='*';
                }
                str+=password.slice(-2,password.length);
                return {success : true, password : str};
            }
        }catch(err){
            return {success : false, msg:"존재하지 않는 계정입니다."};
        }
    }

    

}

module.exports=User;
