"use strict";

const User = require("../../models/User");
<<<<<<< HEAD
const Keyword = require("../../models/keyword");
const firebase = require("../../config/fdb");
const firestore = firebase.firestore();

=======
const db=require("../../config/db");
const KeyStorage=require("../../models/KeyStorage");
>>>>>>> 25d3ffa0f188e679458363b88efc1bb9ec0125af
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
        const user=new User(req.body);
        const response=await user.login();
        return res.json(response);
    },
    register : async (req, res) => {
        const user=new User(req);
        const response=await user.register();
        return res.json(response);
    }
};

const db = {
    send : async (req, res, next) => {
        try{
            const data = req.body;
            await firestore.collection('keyword').doc().set(data);
            res.send('data save successful');
        }
        catch (error){
            res.status(400).send(error.message);
        }
    },

    get_all : async (req, res, next) => {
        try{
            const keyword = await firestore.collection('keyword');
            console.log(Keyword);
            const data = await keyword.get();
            const keywordArray = [];
            if(data.empty){
                res.status(404).send('can not found data');
            }else{
                data.forEach(doc=>{
                    const keyword = new Keyword(
                        doc.id,
                        doc.data().keyword,
                        doc.data().name,
                        doc.data().date
                    );
                    keywordArray.push(keyword);
                });
                res.send(keywordArray);
            }
            res.send('data save successful');
        }
        catch (error){

        res.status(400).send(error.message);
        }
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
        if(req.session){

        }
        else{
            const response={ success : false, msg : "로그인 되어 있지 않은 사용자입니다."};
            console.log(response);
        }
    },
    
    get_data : async (req, res, next) => {
        try{
            const id = req.params.id;
            const keyword = await firestore.collection('keyword').doc(id);
            const data = await keyword.get();
            const keywordArray = [];
            if(!data.exists){
                res.status(404).send('Can not find data');
            }else{
                res.send(data.data());
            }
            res.send('Data save successful');
        }
        catch (error){
        res.status(400).send(error.message);
        }
    },
    
    update_data : async (req, res, next) => {
        try{
            const id = req.params.id;
            const data = req.body;
            const keyword = await firestore.collection('keyword').doc(id);
            await keyword.update(data);
            res.send('Data record updated successfully');
        }
        catch (error){
            res.status(400).send(error.message);
        }
    },

    delete : async (req, res, next) => {
        try {
            const id = req.params.id;
            await firestore.collection('keyword').doc(id).delete();
            res.send('Data deleted successfully')
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

}

module.exports={
    output,
    process,
    db
};