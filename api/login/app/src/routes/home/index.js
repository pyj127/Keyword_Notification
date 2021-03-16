"use strict";

const express = require("express");
const router =express.Router();
const ctrl = require("./home.ctrl");

//get으로 요청시 화면 렌더링
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

//account
router.post("/login", ctrl.account.login);
router.post("/register", ctrl.account.register);
router.get("/logout",ctrl.account.logout);
router.get("/quit",ctrl.account.quit);
router.post("/find/id",ctrl.account.findId);
router.post("/find/pw",ctrl.account.findPw);

//firebase 푸쉬알림

router.post("/send", ctrl.fdb.send);
router.get("/keyword", ctrl.fdb.get_all);
//router.get('/keyword/:id', ctrl.fdb.get_data);
router.put('/keyword/:id', ctrl.fdb.update_data);
router.delete('/keyword/:id', ctrl.fdb.delete);

//keyManage
router.post("/keyword/add",ctrl.keyManage.addKey);
router.post("/keyword/delete",ctrl.keyManage.deleteKey);
router.get("/keyword/get",ctrl.keyManage.getKey);

//Main Page (왼쪽 탭)
router.get("/portal",ctrl.main.getPortal);

module.exports=router;
