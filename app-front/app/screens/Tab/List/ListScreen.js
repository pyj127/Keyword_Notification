import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: flex-start;
`;
const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #ffffff;
  padding: 15px 20px;
`;
const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ItemTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const ItemDescription = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  color: #000000;
`;
const Date = styled.Text`
  font-size: 11px;
  color: #808080;
`;
const Department = styled.Text`
  font-size: 11px;
  color: #1e90ff;
`;
// dedgerblue: #1E90FF
const Header = styled.View`
  height: 30px;
  color: #1e90ff;
  margin-bottom: 26px;
  padding-top: 13px;
`;
const HeaderText = styled.Text`
  font-size: 20px;
  font-weight:bold;
  color: #1e90ff;
  text-align: center;
  border-bottom-width: 1.5px;
  border-bottom-color: rgba(0,0,0,0.18)
  padding-bottom: 10px;
`;

const lists = [];
lists.push({
  id: 1,
  title: `[대학일자리센터] 2021 상반기 삼성 기회균등 특별채용 지원자 모집 안내`,
  description: `이미지 파일입니다. 클릭해서 확인해주세요.`,
  depart: `대학일자리센터 운영팀`,
  date: '2021-03-10',
  link: {
    webURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107720&article.offset=0&articleLimit=10',
    mobileWebURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107720&article.offset=0&articleLimit=10',
  },
});
lists.push({
  id: 2,
  title: `[생활관] 2021년 1학기 생활관 입사 추가 신청 안내`,
  description: `이미지 파일입니다. 클릭해서 확인해주세요.`,
  depart: `생활관`,
  date: '2021-03-10',
  link: {
    webURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107719&article.offset=0&articleLimit=10',
    mobileWebURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107719&article.offset=0&articleLimit=10',
  },
});
lists.push({
  id: 3,
  title: `학생식당 푸드코트 오픈 안내`,
  description: `이미지 파일입니다. 클릭해서 확인해주세요.`,
  depart: `총무팀`,
  date: '2021-03-10',
  link: {
    webURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107718&article.offset=0&articleLimit=10',
    mobileWebURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107718&article.offset=0&articleLimit=10',
  },
});
lists.push({
  id: 4,
  title: `연암관 코로나19 확진 사실 알림`,
  description: `2021년 3월 10일(수) 연암관 근무자가 코로나19 확진 판정을 받음에 따라 아래와 같이 해당 사실을 알려 드립니다. 1. 확진자: 연암관 근무자 1명 2. 확진날짜: 2021년 3월 10일(수) 오후 2시 30분 3. 근무장소: 연암관 11층 4. 이동동선: 3월 10일(수) 오후 확진되기 전, 해당 주에 학교를 나온 요일이 3월 8일(월) ...`,
  depart: `대학일자리센터`,
  date: '2021-03-10',
  link: {
    webURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107714&article.offset=0&articleLimit=10',
    mobileWebURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107714&article.offset=0&articleLimit=10',
  },
});
lists.push({
  id: 5,
  title: `[봉사활동] (영통구청) 지성·감성 쑥쑥! 언택트 학습·정서 멘토링 멘토 모집(재공지)`,
  description: `이미지 파일입니다. 클릭해서 확인해주세요.`,
  depart: `사회봉사센터`,
  date: '2021-03-10',
  link: {
    webURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107706&article.offset=0&articleLimit=10',
    mobileWebURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107706&article.offset=0&articleLimit=10',
  },
});
lists.push({
  id: 6,
  title: `[대학일자리센터] AI 모바일 앱 서비스 이용 안내`,
  description: `대학일자리센터에서 제공하는 AI 자소서 및 면접 플랫폼을 이제는 모바일 앱에서도 이용이 가능합니다. 최초 등록 1회로 무제한 이용하세요~ 바로가기 링크`,
  depart: `대학일자리센터`,
  date: '2021-03-10',
  link: {
    webURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107699&article.offset=0&articleLimit=10',
    mobileWebURL:
      'https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=107699&article.offset=0&articleLimit=10',
  },
});

const Item = React.memo(
  ({item: {id, title, description, depart, date}, onPress}) => {
    return (
      <ItemContainer onPress={() => onPress({id, title})}>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
          <Department>
            {depart} <Date>{date}</Date>{' '}
          </Department>
        </ItemTextContainer>
      </ItemContainer>
    );
  },
);

const ListScreen = ({navigation}) => {
  const _handleItemPress = (item) => {
    navigation.navigate(item.link);
  };

  return (
    <Container>
      <Header>
        <HeaderText>{'포탈 공지사항'}</HeaderText>
      </Header>
      <FlatList
        keyExtractor={(item) => item['id'].toString()}
        data={lists}
        renderItem={({item}) => <Item item={item} onPress={_handleItemPress} />}
        windowSize={3} //한 화면만 미리 불러오기
      />
    </Container>
  );
};

export default ListScreen;
/*
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
let message_title = "참가";
let message_detail = "2020-2 아주대학교 동문장학생\n선발안내 ~(12/3, 17:00)";
let navigate = "장학생,등록금";
//웬만하면 message를 함수로 만들어서 추가될때마다 재사용하게끔 하기
// const Message = ({ navigation }) => {
//   return (
//     <View style={styles.message}>
//       <TouchableOpacity onPress={() => navigation.navigate("장학생,등록금")}>
//         <View style={styles.message_tounchable}>
//           <View style={{ marginLeft: 5 }}>
//             <Image
//               style={{ width: 80, height: 80 }}
//               source={require("./ajou.png")}
//             />
//           </View>
//           <View
//             style={{
//               paddingLeft: 10,
//               paddingTop: 5,
//             }}
//           >
//             <Text style={styles.message_title}>{message_title}</Text>
//             <Text style={{ fontSize: 16 }}>{message_detail}</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };
const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottom_container}>
        <View style={styles.message}>
          <TouchableOpacity onPress={() => navigation.navigate("장학생")}>
            <View style={styles.message_tounchable}>
              <View style={{ marginLeft: 5 }}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require("./ajou.png")}
                />
              </View>
              <View
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                }}
              >
                <Text style={styles.message_title}>장학생</Text>
                <Text style={{ fontSize: 16 }}>{message_detail}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.message}>
          <TouchableOpacity onPress={() => navigation.navigate("장학생")}>
            <View style={styles.message_tounchable}>
              <View style={{ marginLeft: 5 }}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require("./ajou.png")}
                />
              </View>
              <View
                style={{
                  paddingLeft: 10,
                  paddingTop: 5,
                }}
              >
                <Text style={styles.message_title}>채용</Text>
                <Text style={{ fontSize: 16 }}>
                  {
                    "신규 AI 프로젝트 리서치 엔지니어 \n(체험형 인턴십) ~(2/29, 17:00)"
                  }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ListScreen;
const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  message: {
    marginTop: 15,
    flexDirection: "row",
  },
  message_tounchable: {
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: "white",
    width: Platform.OS === "android" ? 335 : 350,
    borderRadius: Platform.OS === "android" ? 15 : 20,
    height: Platform.OS === "android" ? 85 : 100,
    paddingTop: Platform.OS === "android" ? 2 : 15,
  },
  message_title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: Platform.OS === "android" ? 3 : 5,
  },
});
*/
