# API
api 서버 제작

---
# 구조/기능 설명

#### 1. 계정
  1-1. 로그인
  1-2. 로그아웃 
  1-3. 아이디 찾기 
  1-4. 비밀번호 찾기
  1-5. 회원가입 
  1-6. 회원탈퇴 
#### 2. 키워드 관리  
  2-1. 키워드 추가  
  2-2. 키워드 삭제  
  2-3. 키워드 가져오기  
#### 3. 메인페이지 관리
  3-1. 포탈 게시물 가져오기  

### 계정
#### 1. 로그인
**URL** : /login  
**METHOD** : /POST  
**REQUEST BODY** :  
```
{  
  id : (사용자 아이디),
  psword : (사용자 비밀번호)  
}
```
**RETURN** :  
성공  
```
{
  success : true,  
  id : (사용자 아이디)  
}
```
실패  
1. 아이디!=비밀번호  
```
  { success:false, msg:"비밀번호가 틀렸습니다." }
```
2. 아이디가 존재하지 않는 경우  
```
{ success: false, msg: "존재하지 않는 아이디입니다."}
```
#### 2. 로그아웃
**URL** : /logout  
**METHOD** : /GET  
**RETURN** :  
성공  
```
{success: true, id:req.session.u_id, msg:"로그아웃 성공"}
```
실패  
1. 로그인 되어 있지 않은 사용자가 로그아웃을 하려하는 경우
```
  {success:false, msg : "로그인 되어 있지 않은 사용자입니다."}
```

#### 3. 아이디찾기
**URL** : /find/id  
**METHOD** : /POST  
**REQUEST BODY** :  
```
{
    "email" : ( 사용자 이메일 )
}
```
**RETURN** :  
성공  
```
{ success : true, id : (사용자 아이디) }
```
실패  
1. 가입된 계정이 아닐 때  
```
  {success : false, msg:"존재하지 않는 계정입니다."}  
```

#### 4. 비밀번호 찾기
**URL** : /find/pw  
**METHOD** : /POST  
**REQUEST BODY** :
```
{
    "id" : ( 사용자 아이디 )
}
```
**RETURN** :  
성공
```
{success : true, password : ( 사용자 비밀번호 뒤에 2자리만 공개, 나머지는 *로 표시 )}
```
실패  
1. 가입된 계정이 아닐 때
```
  {success : false, msg:"존재하지 않는 계정입니다."}
```

#### 5. 회원가입
**URL** : /register  
**METHOD** : /POST  
**REQUEST BODY** :
```
{
    "id" : ( 사용자 아이디 ),
    "email" : ( 사용자 이메일 ),
    "psword" : ( 사용자 비밀번호 )
}
```
**RETURN** :  
성공  
```
{success : true}
```
실패  
```
  { err } 
```

#### 6. 회원탈퇴
**URL** : /quit  
**METHOD** : /GET  
**RETURN** :  
성공  
```
{
    "success": true,
    "msg": "성공적으로 삭제되었습니다.",
    "u_id": ( 사용자 아이디 )
}
```
실패  
1. 로그인하지 않은 사용자가 접근하는 경우  
```
  {success:false, msg : "로그인 되어 있지 않은 사용자입니다."}
```
2. 아이디가 존재하지 않는 사용자의 경우  
```
{success : false, msg : "해당 user는 존재하지 않습니다."}
```
### 키워드 관리
#### 1. 키워드 추가  
**URL** : /keyword/add  
**METHOD** : /POST  
**REQUEST BODY** :  
```
{
    "p_name" : ( 페이지 이름 ),
    "keyword" : ( 키워드 )
}
```
**RETURN** :  
성공  
```
{ success : true, msg : "u_id, p_id, k_id are saved successfully", r_id : data.insertId ( 삽입 후 고유 아이디 반환 ) }
```
실패  
1. 이미 등록한 키워드를 또 등록하려는 경우  
```
  { success : false, msg : "이미 해당 등록은 저장되어 있습니다.", r_id : data[0].r_id}
```
2. 로그인하지 않은 사용자가 접근하는 경우  
```
  {success:false, msg : "로그인 되어 있지 않은 사용자입니다."}
```
3. 그외  
```
{success: false, msg: err}
```
#### 2. 키워드 삭제  
**URL** : /keyword/delete  
**METHOD** : /POST  
**REQUEST BODY** :  
```
{
    "p_name" : ( 페이지 이름 ),
    "keyword" : ( 키워드 )
}
```
**RETURN** :  
성공  
```
{success : true, msg: "성공적으로 삭제되었습니다.", r_id : r_id}
```
실패  
1. 존재하지 않은 키워드를 삭제하려 하는 경우  
```
  {success : false, msg : "해당 등록이 존재하지 않습니다."}
```
2. 로그인하지 않은 사용자가 접근하는 경우  
```
  {success:false, msg : "로그인 되어 있지 않은 사용자입니다."}
```
#### 3. 키워드 가져오기  
사용자가 입력한 키워드 정보를 반환한다.  
**URL** : /keyword/get  
**METHOD** : /GET  
**RETURN** :  
성공  
```
{
    "success": true,
    "data": [
        {
            "r_id": 1,
            "p_name": "아주대",
            "keyword": "수강"
        },
        {
            "r_id": 2,
            "p_name": "아주대",
            "keyword": "생활비성 장학"
        },
        {
            "r_id": 3,
            "p_name": "공과대학",
            "keyword": "수강"
        },
        ...
    ]
}
```
아직 등록한 키워드가 없는 경우  
```
{success: true, msg: "아직 등록한 키워드가 존재하지 않습니다."}
```
실패  
1. 로그인하지 않은 사용자가 접근하는 경우  
```
  {success:false, msg : "로그인 되어 있지 않은 사용자입니다."}
```
2. 그 외
```
{success:false,msg:err}
```

### 메인페이지 관리
#### 1. 포탈 최근 게시물 3개 가져오기
포탈 공지사항에서 최근 게시물 최대 3개를 가져온다.  
**URL** : /portal  
**METHOD** : /GET  
**RETURN** :  
성공  
```
{
    "success": true,
    "data": [
        {
            "title": "[종합지원센터] 아르바이트 공고",
            "content": "현대자동차 아르바이트 공고",
            "link": "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107739&article.offset=0&articleLimit=10",
            "updateDate": ""
        },
        {
            "title": "[학부]2021-1학기 4차 등록기간 안내(03.16.~03.18.)",
            "content": "이미지 파일입니다. 클릭해서 확인해주세요.",
            "link": "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107749&article.offset=0&articleLimit=10",
            "updateDate": ""
        }
    ]
}
```
업데이트된 공지사항이 없는 경우
```
{success: true, msg: "아직 공지사항 업데이트가 되지 않았습니다."}
```

실패  
1. 로그인하지 않은 사용자가 접근하는 경우  
```
  {success:false, msg : "로그인 되어 있지 않은 사용자입니다."}
```
2. 그 외
```
{success: false, msg: err}
```

---
# 어려웠던 점, TroubleShooting
쿼리문을 처음 접해서 다루는데 어려웠다. Node Js의 비동기 특징 때문에 간단한 쿼리를 여러번 보내지 않고 다중 쿼리를 활용하였다. 또한, 키워드 가져오기 같은 경우 inner join을 사용하여 데이터베이스 안에 있는 여러 테이블들의 열을 새롭게 조합하여 원하는 정보를 얻어낼 수 있었다.


