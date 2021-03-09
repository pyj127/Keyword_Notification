"use strict";

const express = require("express");
const router =express.Router();
const ctrl = require("./home.ctrl");

//get으로 요청시 화면 렌더링
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

//post 요청시 기능 수행
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

//firebase 푸쉬알림

router.post("/send", ctrl.fdb.send);
router.get("/keyword", ctrl.fdb.get_all);
router.get('/keyword/:id', ctrl.fdb.get_data);
router.put('/keyword/:id', ctrl.fdb.update_data);
router.delete('/keyword/:id', ctrl.fdb.delete);

//api
router.post("/logout",ctrl.process.logout);
router.post("/keyword/add",ctrl.process.addKey);
router.post("/keyword/delete",ctrl.process.deleteKey);


module.exports=router;