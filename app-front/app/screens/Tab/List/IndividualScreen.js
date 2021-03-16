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

const lists = [];
lists.push({
  id: 1,
  title: `2021학년도 소프트웨어학과 국제/국가자격증 취득 응시료 지원`,
  description: `1. 지원 내용 : IT분야 관련 자격증을 취득한 학생에게 연 1회 응시료 지원 - 국제공인자격증 : 최대 100,000원 - 국가공인자격증 : 최대 50,000원 ...`,
  depart: `소프트웨어학과`,
  date: '2021-03-10',
  link: {
    webURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=678&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
    mobileWebURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=678&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
  },
});
lists.push({
  id: 2,
  title: `2021학년도 소프트웨어학과 어학 시험 응시료 지원`,
  description: `1. 시행 목적  1) 국제적 경쟁력을 갖춘 정보통신인 및 국제사회 적응 능력을 갖춘 전문인 양성 2) 학과생들의 어학능력/성적 향상을 도모하여 진로선택 및 취업활동 지원 ...`,
  depart: `소프트웨어학과`,
  date: '2021-03-10',
  link: {
    webURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=677&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
    mobileWebURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=677&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
  },
});
lists.push({
  id: 3,
  title: `[현대엔지비] 소프트웨어 인재육성 및 취업연계 플랫폼(Softeer) 오픈기념 코딩테스트`,
  description: ` [현대엔지비] 소프트웨어 인재육성 및 취업연계 플랫폼(Softeer) 오픈기념 코딩테스트  □ Softeer 플랫폼 소개  Softeer는 모빌리티 소프트웨어 개발자들을 육성하고 채용하기 위해 현대자동차그룹에서 새롭게 선보이는 플랫폼...`,
  depart: `소프트웨어학과`,
  date: '2021-03-08',
  link: {
    webURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=676&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
    mobileWebURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=676&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
  },
});
lists.push({
  id: 4,
  title: `강의페어링(교양 1학점) 수강신청안내`,
  description: `이미지 파일입니다. 클릭해서 확인해주세요.`,
  depart: `소프트웨어학과`,
  date: '2021-03-05',
  link: {
    webURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=675&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
    mobileWebURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=675&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
  },
});
lists.push({
  id: 5,
  title: `알고리즘 F045 한국어 강의 변경 안내`,
  description: `' 알고리즘 F045 '해당강의는 원래 영어로 진행 되는 강의에서 한국어 강의로 변경 되었습니다. 알고리즘 F045 수강 희망하는 학생은 수강 정정기간 동안 직접 정원내에서 수강신청 진행 하면 됩니다.`,
  depart: `소프트웨어학과`,
  date: '2021-03-04',
  link: {
    webURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=674&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
    mobileWebURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=674&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
  },
});
lists.push({
  id: 6,
  title: `[2021년 8월 졸업예정자] 1차졸업사정 결과 안내`,
  description: `소프트웨어학과 2021년 8월 졸업예정자에게 1차 졸업사정 결과를 에임즈에 등록된 개인메일로 발송했습니다.  확인바랍니다. `,
  depart: `소프트웨어학과`,
  date: '2021-03-04',
  link: {
    webURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=673&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
    mobileWebURL:
      'http://software.ajou.ac.kr/bbs/board.php?tbl=notice&mode=VIEW&num=673&category=&findType=&findWord=&sort1=&sort2=&it_id=&shop_flag=&mobile_flag=&page=1',
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

const IndividualScreen = ({navigation}) => {
  const _handleItemPress = (item) => {
    navigation.navigate(item.link);
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item['id'].toString()}
        data={lists}
        renderItem={({item}) => <Item item={item} onPress={_handleItemPress} />}
        windowSize={3} //한 화면만 미리 불러오기
      />
    </Container>
  );
};

export default IndividualScreen;

/*
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
let message_text1 =
  "2020학년도 2학기 아주대학교 동문장학생 선발\n1. 장학금명 : 아주대학교 동문장학\n2. 장학금액 : 1,000,000원 (인당, 생활비)\n3. 장학대상 : 인천에 연고가 있거나 있었던 자 / 총 5명\n4. 지원자격\n가. 2020학년도 2학기 현재 아주대학교 재학동문 (추후, 학적변동(휴학 또는 제적) 발생시 장학금 환수)\n나. 가계형편이 곤란한 재학동문으로서, 2020학년도 2학기 한국장학재단 소득분위 0~6분위자 우대 ";
let message_text2 =
  "국립국제교육원에서 2021 <대만장학금> 장학생 선발을 진행합니다. 관심있는 학생들의 많은 지원 바랍니다.\n가. 선발 과정 : 석·박사 학위과정\n나. 선발 정원 : 6명\n다. 지원 방법: 주한국타이페이대표부 교육조에 직접 지원(등기우편으로 송부)\n라. 서류 제출 마감: 2021. 3. 31.(수) 18:00까지 도착분\n마. 지원자격 및 제출서류 : [붙임] 선발 공고 참조\n바. 문의처: 02-6329-6058(대만장학금 담당자), korea@mail.moe.gov.tw\n※ 선발 및 장학금 관련 문의는 위의 주한국타이페이대표부 교육조 <대만장학금> 담당자에게 직접 문의할 것";
const DetailsScreen = () => {
  //let message_text = "참가";
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.message}>
          <Text style={styles.message_text}>{message_text1}</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.message_text}> {message_text2}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    alignItems: "center",
    width: 300,
    height: 260,
    backgroundColor: "dodgerblue", //or grey or cornflowerblue
    marginLeft: 36,
    marginTop: 15,
    borderRadius: 10,
  },
  message_text: {
    fontSize: 15,
    color: "white",
    padding: 10,
  },
});
*/
