import pymysql
from pyfcm import FCMNotification

TOKEN = "dfy2-40HQxWfeNpYDK2i0b:APA91bG0Lav4CKjx3ZP4kKaeGxS7OBNUukEfHLdNlqM2Z2W1iPkLCVSVlItrAmXAjD9X841vWRMB0JTVvcyxgpusvSWscY2DF8eIjMgwXwcBythRr2amZfPzalgyIF0VYuMCAfal08eh"

APIKEY = 'AAAAtAC8hBA:APA91bGYslczacGm5d8UsPt8hkJFv5mRRny0mcyeNEQOdIIKaQ2Y71lbzHJNx3bVPC7ufiyfPuwkktbuJST0KUNROHUsEPCXjBHJA4xgf9TtOqIE_W7BwF0MLHKYrOvLl7d1ODfgIKuk'

# 파이어베이스 콘솔에서 얻어 온 서버 키를 넣어 줌
push_service = FCMNotification(api_key=APIKEY)
tokens = ['dfy2-40HQxWfeNpYDK2i0b:APA91bG0Lav4CKjx3ZP4kKaeGxS7OBNUukEfHLdNlqM2Z2W1iPkLCVSVlItrAmXAjD9X841vWRMB0JTVvcyxgpusvSWscY2DF8eIjMgwXwcBythRr2amZfPzalgyIF0VYuMCAfal08eh']

# subscribed = push_service.subscribe_registration_ids_to_topic(tokens, 'test')
# print(subscribed)

def sendMessage(body, title):
    # 메시지 (data 타입)
    data_message = {
        "body": body,
        "title": title
    }
    # topic을 이용해 다수의 구독자에게 푸시알림을 전송함
    result = push_service.notify_topic_subscribers(topic_name="news", message_body=data_message)
    #result = push_service.single_device_data_message(registration_id=TOKEN, data_message=data_message)
    # 전송 결과 출력
    print(result)

def insert_trig():
    conn = pymysql.connect(
            host="13.125.132.137", 
            user="root", 
            password="", 
            db="key_db", 
            charset="utf8")

    curs = conn.cursor()

    sql = "select data from sessions"
    curs.execute(sql)
    conn.commit()
    rows = curs.fetchall()
    
    for i in rows:
        uid = i[0].split('"')[17]
        
        sql1 = "select k_id from registration where p_id = 1 and u_id = " + "'" + str(uid) + "'"
        curs.execute(sql1)
        conn.commit()
        rows1 = curs.fetchall()

        for i in rows1:
            kid = i[0]
            
            sql2 = "select keyword from keyword where k_id = " + str(kid)
            curs.execute(sql2)
            conn.commit()
            rows2 = curs.fetchone()

            for j in rows2:
                keyword = j

                #기존 idx이랑 겹치면 생략.
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

                        sql4 = "insert into trig (u_id, title, content, link, keyword, p_id, department, updateDate, idx, category) values(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                        val = (uid, title, content, link, keyword, p_id, department, updateDate, idx, category)
                        curs.execute(sql4, val)
                        conn.commit()
                        sendMessage("hello", "world")

    conn.close()
