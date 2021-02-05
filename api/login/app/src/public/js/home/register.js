"use strict";

//질의선택자 : html에 있는 태그에서 하나를 선택하여 자바스크립트에서 제어할 수 있게 해줌. (DOM 객체)
const id=document.querySelector("#id"), //태그에 id로 부여되어있는 "id"를 가져와라.
    name=document.querySelector("#name"),
    psword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn=document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
   const req = {
       id : id.value,
       name : name.value,
       psword: psword.value,
       confirmPsword : confirmPsword.value,
   };
   console.log(req);
   fetch("/register",{
       method: "POST",
       headers: {
        "Content-Type" : "application/json",
       },
       body : JSON.stringify(req),
   })
        .then(res=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/";
            }else{
                alert(res.msg);
            }

        })
        .catch((err)=>{
            console.error("회원가입 중 에러 발생");
        });
}
