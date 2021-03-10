# Keyword_Notification(2021.01 - 2020.03)
> 2021 KEY Team Project

## 🏡 팀 소개

안녕하세요! 팀 KEY입니다.

- [김승은](https://github.com/julie0005)
- [김예원](https://github.com/yeye921)
- [박윤정](https://github.com/pyj127)
- [우다현](https://github.com/defwdahyun0)
- [한동민](https://github.com/handevmin)

## 🗺 **서비스 소개**

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

## 1. Technology used  🛠

<img >

### javascript >
    프로젝트 전반에서 사용

### Python >
    웹 크롤링을 하기 위한 다양한 모듈을 지원해주는 python을 이용해 웹페이지 정보를 가져올 예정입니다. 
### Node.js>
    api구현을 위해 사용,  빠른 개발과 처리를 위해 node.js
### RDBMS >   
    - MySQL: 사용자, 키워드, 페이지에 대한 정보 저장
    - Firebase: 푸시 알림 기능 구현
### Amazon EC2 >
    프로세싱한 데이터를 front-end로 API를 공급하는 Server (in AWS EC2)  
### ReactNative >
    app-front에서 어플 개발을 위해 사용 
### ExpressJS >

### GitHub >
    공동작업을 위해 사용, 버전관리
### Notion >
    공동작업을 위해 사용 , 주요 문서작업
### VisualStudioCode >
    공동작업을 위해 사용



**BackEnd** `Java8` `Spring Boot 2.3`

**Database** `MariaDB 10.3` 

**Server** `AWS EC2`

**CI/CD** `Jenkins`

**FrontEnd** `Javascript` `Vue.js`

**Version Control** `Git`

**Repository** `Github`

## 2. directory description
### 2.1 /front-end  
    - Netlify로 자동으로 변경 및 배포되는 front-end 코드
    - SSR와 CSR(SPA)의 장점을 가지도록 Nuxt  
    - [코드 설명]()

### 2.2 /back-end
    - AWS EC2 서버에서 데몬 프로세스로 있는 node.js 코드
    - js로 짜놓은 서버 코드를 ts로 수정하는 
    - [코드 설명]()

## 3. Development result

### 로그인 화면
### Main 화면

![mnm1](https://user-images.githubusercontent.com/46476398/92077322-21eb5f80-edf7-11ea-90d1-b3e813ae5704.JPG)

### 3.1 공지사항 읽어오기

![mnm2](https://user-images.githubusercontent.com/46476398/92077324-231c8c80-edf7-11ea-8c02-b13cfc76a001.JPG)

### 3.2 keyword 추가

![mnm3](https://user-images.githubusercontent.com/46476398/92077325-23b52300-edf7-11ea-894d-b5fdd9ef35eb.JPG)

### 3.3 Setting 화면

![mnm4](https://user-images.githubusercontent.com/46476398/92077326-244db980-edf7-11ea-9ff5-65782d053c27.JPG)

## 4. How to process

### 4.1. Running front-end

``` bash
# go to directory
$ cd /front-end

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
$ cd /back-end

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
