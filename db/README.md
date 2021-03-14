# DB 관리
웹 크롤링 및 데이터베이스 관리

---
# 구조/기능 설명
## 1. Database Management
### 1-1. Schema
![image](https://user-images.githubusercontent.com/69350945/111055088-b7a62c80-84b5-11eb-8862-3bcdf9299a4c.png)

## 2. Crawling
### 2-1. Crawling-DB 구조
* **crawl.py**
```
# 아주대학교 홈페이지 공지사항 사이트 크롤링

conn = pymsql.connect()
requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)
    
# 1~2 page 크롤링
for i in range(2):
    url = "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=list&&articleLimit=10&article.offset="+str(10*i)
    res = requests.get(url, verify=False)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
```

```
# 크롤링한 정보들을 db의 'crawl_data' 테이블로 insert

curs = conn.cursor()

for j in range(10):
    sql = "insert into crawl_data (title, content, link, p_id, department, updateDate, idx, category) values(%s, %s, %s, %s, %s, %s, %s, %s)"
    val = (title[j], content[j], link[j], 1, s[j][2], s[j][3], s[j][0], s[j][1])
    curs.execute(sql, val)
    conn.commit()
    
conn.close()
```

* **build_db.py**
```
# 필요한 정보들만 db의 'trig' 테이블로 insert

# 'crawl_data' 테이블에서 user가 등록한 keyword가 포함된 title을 가지고, 'trig' 테이블에 존재하지 않는 게시글 정보 가져오기 
sql3 = "SELECT c.title, c.content, c.link, c.p_id, c.department, c.updateDate, c.idx, c.category FROM crawl_data c WHERE c.idx NOT IN (SELECT t.idx FROM trig t) AND c.title LIKE '%" + keyword + '%\''
curs.execute(sql3)
conn.commit()
rows3 = curs.fetchall()

if rows3:
    for k in rows3:
    title = k[0]
    content = k[1]
    link = k[2]
    p_id = k[3]
    department = k[4]
    updateDate = k[5]
    idx = k[6]
    category = k[7]
    
    # 필요 정보들 'trig' 테이블에 insert
    sql4 = "insert into trig (u_id, title, content, link, keyword, p_id, department, updateDate, idx, category) values(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (uid, title, content, link, keyword, p_id, department, updateDate, idx, category)
    curs.execute(sql4, val)
    conn.commit()
    sendMessage("", "")
```

---
# 필요한 학습
* SQL
* BeautifulSoup  

---
# 어려웠던 점, TroubleShooting
## Crawling
사이트에서 원하는 부분만 크롤링하는 코드를 구현하기 까다로워서 시간/메모리 측면에서 비효율적인 방식으로 데이터를 저장한 것 같다.  
크롤링 문법을 더 익힌 후에 효율적으로 데이터를 저장하는 방식으로 크롤링 코드를 구현하고자 한다.  


## SQL Query문
여러 SQL 문법들을 공부하고 사용해보는 데에 시간이 많이 걸렸다.  


## Crontab
### Crontab 주요 issue
- 주기 설정
- 로그 파일 생성 -> 오류 체크
- 주요 함수
```
crontab -l  //crontab 목록 조회
```
```
crontab -e  //crontab 생성 및 수정

//cron 파일: 월~금 9:00~18:00 시간대에 매 00분, 30분마다 <crawl.py> 수행
00,30 9-18 * * 1-5 python /home/ubuntu/crawl_py/crawl.py >> /home/ubuntu/crawl_py/ex.log 2>&1
```
```
crontab -r  //crontab 삭제
```
```
tail -f [파일명].log   //로그 파일 조회
```
  
  
## 정리
대부분의 기능들을 다 처음 접해봐서 공부하고 구현하는 데에 어려운 점이 많았다.  
때문에 미숙하게 구현한 부분이 꽤 있지만 이번 기회에 공부한 내용을 바탕으로 다음 프로젝트는 더 완성도 있게 마무리하고자 한다.
