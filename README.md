# Keyword_Notification(2021.01 - 2021.03)
> 2021 KEY Team Project

## 🏡 팀 소개

안녕하세요! 팀 KEY입니다.

- [김승은](https://github.com/julie0005)
- [김예원](https://github.com/yeye921)
- [박윤정](https://github.com/pyj127)
- [우다현](https://github.com/defwdahyun0)
- [한동민](https://github.com/handevmin)

## 🔑 **서비스 소개**

<br/>

학교 공지사항에서 프로그램을 신청하려고 봤더니, 신청기한이 지난 적이 있으신가요?

학교 홈페이지, 학과 홈페이지를 돌아다니며 공지사항을 확인하기 힘드신가요?

매일 공지사항을 확인하기 어려우신가요?


<br/>

이제 `아주키워드`에서 원하는 정보 알림을 받아보세요!

(이미지 넣기)

<br/>

- 회원가입/로그인을 하고,
- 키워드를 추가해보세요.
- 알림을 받아볼 수 있습니다!
- 나에게 딱 맞는 알림을 키워드를 설정하고, 모아서 알림을 받아보세요!

<br/>

## 1. Technology used

### javascript >
    프로젝트 전반에서 사용하였다. 다른 언어에 비해 배우기 쉽고 개발 시간이 짧고 다양한 프로그래밍 언어 및 여러 데이터베이스와 같은 서버측 프로그램과 긴밀히 통합될 수 있다.
### Python >
    웹 크롤링을 할 때 사용하였다. 웹 크롤링을 하기 위한 다양한 모듈을 지원해주고 타입에 대해 자유롭기 때문에 런타임 데이터를 기반으로 한 기능과 자료형을 만들 수 있다.
### Node.js>
    api구현을 위해 사용하였다. 개발이 빠르고 쉽다. 서버 설치부터 화면 띄우는 것까지 금방 처리 되고 npm을 이용해 자신이 필요한 라이브러리와 패키지를 검색해서 설치하고 사용할 수 있기 때문에 개발속도와 효율성이 크게 향상된다.

### MySQL>
    사용자, 키워드, 페이지에 대한 정보 저장을 할 때 사용하였다. 가장 레퍼런스가 많은 RDB(관계형 데이터베이스)로 문제 발생 시 진단 및 해결이 쉽다.

### MySQL WorkBench>
    SQL 개발과 관리, 데이터베이스 설계, 생성 그리고 유지를 위한 단일 개발 통합 환경을 제공하는 비주얼 데이터베이스 설계 도구이다.
### Firebase >   
    푸시 알림 기능 구현을 위해 사용하였다.
### Amazon EC2 >
    프로세싱한 데이터를 front-end로 API를 공급하는 Server로 사용하였다.클라우드에서 안전하고 확장이 가능한 컴퓨팅 용량을 제공하는 웹 서비스입니다.
### ReactNative >
    app-front에서 어플 개발을 위해 사용하였다. iOS, android 동시 개발이 가능하고 javascript의 문법을 사용한다.
### ExpressJS >
    Node.js 개발에서 개발을 빠르고 손쉽게 할 수 있도록 도와주는 역할을 한다.

### Git>
    버전 관리를 위해 사용하였다. 버전 관리(VCS/SCM)로서 가장 널리 사용하는 VCS이다.
### GitHub >
    공동작업을 위해 사용하였다.Git 호스팅 및 코드 공유 저장소로 가장 널리 사용하는 플랫폼이다.
### VisualStudioCode >
    공동작업을 위해 사용하였다. 디버깅 지원과 Git 제어가 가능한 소스 코드 편집기이다.
### Notion >
    메인 문서 공동 작업 도구로서 주요 문서작업을 하는 데 사용하였다.

###  Microsoft 365>
    보조 문서 공동 작업 도구. Microsoft PowerPoint로 발표 자료를 만들었다.
 
<br/>

**BackEnd** `Javascript` `Node.js` `Amazon EC2` `ExpressJS`

**Database** `MySQL` `MySQLWorkBench`

**crawling** `Python`

**Server** `AWS EC2` `Firebase`

**FrontEnd** `Javascript` `ReactNative`

**Version Control** `Git`

**Repository** `Github`

**Tools** `Visual Studio Code` `Notion` `Microsoft 365`

<br/>

## 2. Directory description
### 2.1 api
    - ReactNative로 구헌된 front-end 코드
[README](https://github.com/julie0005/Keyword_Notification/blob/master/api/README.md)

### 2.2 app-front
    - AWS EC2 서버에서 데몬 프로세스로 있는 node.js 코드
[README](https://github.com/julie0005/Keyword_Notification/blob/master/app-front/README.md)

### 2.3 db
     - 크롤링 및 sql 구현
[README](https://github.com/julie0005/Keyword_Notification/blob/master/db/README.md)

### 2.4 meeting_note
    - 회의록, notion으로 기록 후 옮김

## 3. Development result

### 로그인 화면
![로그인]()

#### id 찾기 화면
![id 찾기]()
#### 비밀번호 찾기 화면
![비밀번호 찾기]()
#### 회원가입 화면
![회원가임]()

### Main 화면
![메인]()

#### list 화면
![리스트]()
#### keyword 추가 화면
![키워드 추가]()
#### Setting 화면
![설정]()

## 4. How to process

### 4.1. Running front-end

``` bash
# go to directory
$ cd app-front

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
### 4.2. Running back-end

``` bash
# go to directory
$ cd api

# install node and npm (in ubuntu)
$ sudo apt-get update 
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ npm init --yes
$ npm install express mysql --save

# start node server with exit state(background)    
$ nohup npm start &
$ exit

# start node server with auto_modifying state(Daemon process)
$ nohup nodemon </dev/null &
$ exit
```
## 5. contact
    e-mail: keywordalarmi@gmail.com
