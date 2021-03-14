# App Front

KEY팀은 ReactNative 언어로 앱 프론트엔드를 구현했습니다.

---

# 구조 설명

app-front 폴더에서 앱 프론트 전반을 관리했습니다. app-front 폴더 안 폴더 구조는 다음과 같습니다. 

* android
    * app
    * gradle/wrapper
* app
    * components
    * routers
    * screens
        * Login
        * Tab
            * Add
            * List
            * Set
    * utils
* assets
* ios
* .node_modules
* App.js , app.json, package-lock.json, package.json

아래는 app-front 하위 폴더와 코드에 대한 설명입니다.

아래의 설명을 모두 읽으면, 키워드 알림 어플의 프론트에서의 동작 방식에 대해 알 수 있습니다.  

## android

푸시 알림을 구현하기 위해 expo 방식에서 react-native cli 방식으로 변경했고, 그 과정에서 추가된 코드입니다.   
파이어베이스에 앱을 등록하기 위해 구성파일을 Android\app안에 넣었고 build.gradle 파일을 수정해 Firebase SDK를 추가하였습니다.

## app

앱 프론트 소스 전반을 관리했습니다. 크게 **components, routers, scrrens, utils**로 세분화하여 작업했습니다.


### components

재사용할 수 있는 UI 조립 블록인 컴포넌트를 구현한 코드를 담은 폴더입니다. 

* Button1.js, Button2.js, Button3.js : 세 개의 버튼 디자인을 한 후 여러 스크린에서 사용했습니다. 회원가입 등 계정관리 화면에서 주로 사용했습니다. 
* Input.js : 회원가입 스크린에서 input을 입력받는 데 사용한 코드입니다. useState 함수로 상태 변수를 생성하고, 컴포넌트에 값이 변경될 때마다 input이 반영됩니다. 
* Image.js : 이미지 렌더링을 위한 코드입니다. 

### routers

화면 간의 전환을 하게 해주는 navigation 기능을 구현한 코드를 담은 폴더입니다.

* Switch.js: 메인 navigation입니다. LogSwitch, TabStackScreen을 연결합니다. 로그인에 성공하면 메인 화면으로 이동합니다.
    * LogSwitch.js: 로그인 화면 navigation. Switch 방식을 이용했습니다.
    * TabStackScreen.js: 메인 화면 navigation. Stack 방식을 이용했습니다. 탭바(BottomTab)를 이용해서 화면을 이동합니다.
        * ListTabStack.js: 목록 화면 navigation. 탭바(TopTab)를 이용해서 화면을 이동합니다.
        * (키워드 추가 화면은 AddScreen에서 자체 구동됩니다.)
        * SettingStack.js: 설정 화면 navigation. Stack navigation을 이용해 다른 화면으로 이동합니다.


### screens

앱 프론트에서 보여지는 화면들을 구현한 코드를 담은 폴더입니다.

* Login: 로그인 화면 폴더
    * IDScreen.js: 아이디 찾기 화면
    * LoginScreen.js: 로그인 화면
    * PWScreen.js: 비밀번호 찾기 화면
    * SignupScreen.js: 회원가입 화면
* Tab: 메인 화면 폴더, 탭바
    * Add: 키워드 추가 화면 폴더
        * Components: 키워드 추가화면에서 쓰이는 각종 
        * AddScreen.js: 푸시알림 받고 싶은 키워드를 추가할 수 있는 화면
    * List: 목록 화면 폴더
        * ListScreen: 메인 페이지, 학교 홈페이지의 공지사항 정보 가져옴, flatlist 사용
        * IndividualScreen: 개인 학과 페이지, 임시 화면
    * Set: 설정 화면 폴더
        * SettingScreen.js: 설정 화면
        * SetScreens: 설정 화면 폴더
            * Account.js: 계정관리 화면
            * Account
                * EmailChange.js: 비밀번호 변경 화면
                * Logout.js: 로그아웃 화면
                * PWChange.js: 비밀번호 변경 화면
                * Quit.js: 탈퇴화면
            * Alarm.js: 알림 권한 설정 화면
            * AlarmCycle.js: 알람 주기 설정 화면
            * Condition.js: 이용약관 화면
            * Contact.js: 연락처 화면
            * Personal.js: 개인정보처리방침 화면
        
## utils
앱에서 사용되는 기능들을 구현한 코드를 담은 폴더입니다.

* common: 올바른 이메일 형식인지 확인하고, 공백을 제거합니다. 회원가입 화면에서 쓰입니다.

## asssets
react native를 시작하면 자동생성되는 폴더로, 이미지를 담고 있습니다.

* splash.png: 로딩 화면 png 파일


## .node_modules

npm module을 담고 있습니다. private 폴더로, git clone을 해오는 사용자는 직접 npm install로 설치를 해야 폴더가 만들어집니다.

## 기타

* App.js: 앱의 시작 코드
* package.json, package-lock.json: 필요한 패키지 저장
* app.json
* .gitignore: git에 push하지 않을 코드 정리

---

# 필요한 학습

ReactNative
* 스타일링, Hooks, Context API, 내비게이션


---

# 어려웠던 점, TroubleShooting

### 모듈 설치

처음 ReactNative를 시작했을 때 많은 오류가 발생했고 어떻게 해결해야할지 모르겠어서 우왕좌왕했던 경험이 있습니다. 

이러한 문제를 해결하려면, error 메시지에 설치가 필요하다고 뜨는 모듈을 모두 설치해야 합니다. 

### 헤더 적용 -> stack navigation 

뒤로가기 기능이 있는 헤더를 적용하기 위해서는 어떻게 해야할까요?

stack navigation을 적용해야 합니다.

스타일링을 해서 헤더를 만들면 단일 화면에서만 헤더를 적용할 수 있고, stack navigation을 이용하면 자동으로 헤더가 적용되고 navigation 구현한 화면에서 헤더 스타일링을 할 수 있습니다. 

### navigation 상속

한 화면에 두 개의 navigation을 적용하려면, navigation 아래에 navigation을 상속시켜야 합니다.

저는 TabStack의 자식으로 ListTabStack, SettingStack을 상속시켜서 네비게이션을 동작하게 했습니다. 

이 때 네비게이션을 구현한 코드는 function 형태가 아니라 const 구조를 가지고 있어야 동작이 되었습니다.

### 서버와 연동

api를 가져오고(fetch), error 처리하는 부분이 어려웠습니다.

### push alarm

푸시 서비스를 이용할 수 있는 3가지 방법으로 Expo Push API, Expo bare fcm, react-native fcm 가 있었습니다.
Expo Push API는 FCM과 직접 통신하는 서버를 구축하는 경우 사용할 수 없었고
Expo bare fcm의 경우는 빌드하는데 시간이 지나치게 오래 소요되었으며 알수없는 오류가 많이 발생하였습니다.
따라서 이러한 과정을 통해 react-native fcm을 이용하기로 결정하게 되었습니다.
백엔드에서는 주제구독방식을 이용할 수 있는 Firebase Admin SDK를 이용함으로써 특정 주제를 구독하는 여러 기기에 메시지를 한번에 보낼 수 있도록 하였습니다
결과적으로 react-native fcm을 사용함으로써 저희가 원하는 키워드 푸시알림서비스에 더욱 가까워지게 되었습니다. 

### expo cli -> react native cli 변경

react-native의 fcm기능을 사용하기 위해 expo cli에서 react-native cli로 넘어가면서 오류가 나는 부분을 찾아 코드를 수정하는 부분이 어려웠습니다.
기존에 expo방식으로 사용했던 컴포넌트를 react-native 방식으로 수정해야 했습니다.


