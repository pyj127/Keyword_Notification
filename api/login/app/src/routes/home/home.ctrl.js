"use strict";

const User = require("../../models/User");
const Keyword = require("../../models/keyword");
const firebase = require("../../config/fdb");
const firestore = firebase.firestore();

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
        const user=new User(req.body);
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