import requests
from bs4 import BeautifulSoup
import re
import pymysql
import time
from pyfcm import FCMNotification
import build_db 

def crawl():
    conn = pymysql.connect(
        host="13.125.132.137", 
        user="root", 
        password="", 
        db="key_db", 
        charset="utf8")

    curs = conn.cursor()
    requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)
    
    for i in range(2):
            s=[]
            url = "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=list&&articleLimit=10&article.offset="+str(10*i)
            res = requests.get(url, verify=False)
            res.raise_for_status()
            soup = BeautifulSoup(res.text, "lxml")
            lst = soup.find_all("td")

            for j in range(0, 60, 6):
                info = (lst[j].get_text().strip(), lst[j+1].get_text().strip(), lst[j+4].get_text().strip(), lst[j+5].get_text().strip())
                s.append(info)

            lst = soup.find_all("td", attrs={"class":"b-td-left"})
            title = []
            link = []
            content = []
            for l in lst:
                title.append(l.a.get_text().strip())
                link.append("https://www.ajou.ac.kr/kr/ajou/notice.do"+l.a["href"])

            for l in link:
                res1 = requests.get(l, verify=False)
                res1.raise_for_status()
                soup1 = BeautifulSoup(res1.text, "lxml")
                content_lst = soup1.find_all("div", attrs={"class":"b-content-box"})
                for k in content_lst:
                    c = k.get_text()
                    content.append(c[:500])
            
            for j in range(10):
                sql = "insert into crawl_data (title, content, link, p_id, department, updateDate, idx, category) values(%s, %s, %s, %s, %s, %s, %s, %s)"
                val = (title[j], content[j], link[j], 1, s[j][2], s[j][3], s[j][0], s[j][1])
                curs.execute(sql, val)
                conn.commit()

    conn.close()

if __name__ == "__main__":
    crawl()
    build_db.insert_trig()
