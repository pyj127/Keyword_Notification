import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: dodgerblue;
  align-self: flex-start;
  margin: 20px;
`;
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
  font-size: 15px;
  font-weight: 600;
`;
const ItemDescription = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  color: #808080;
`;

const lists = [];
lists.push({
  id: 1,
  title: `계정관리`,
  description: `이메일 변경, 비밀번호 변경, 로그아웃, 회원 탈퇴가 가능합니다.`,
})
lists.push({
  id: 2,
  title: `앱 알림 설정`,
  description: `앱 알림을 설정하는 화면으로 이동합니다.`,
})
lists.push({
  id: 3,
  title: `앱 알림 주기 설정`,
  description: `앱 알림 주기를 설정합니다. 키워드 별로 설정할 수 있습니다.`,
})
lists.push({
  id: 4,
  title: `서비스 이용약관`,
  description: `앱 이용약관을 확인할 수 있습니다.`,
})
lists.push({
  id: 5,
  title: `개인정보 처리방침`,
  description: `개인정보 처리방침을 확인할 수 있습니다.`,
})
lists.push({
  id: 6,
  title: `문의하기`,
  description: `문의사항을 문의메일로 보내주세요.`,
})

const Item = React.memo(
  ({ item: { id, title, description }, onPress }) => {
    return (
      <ItemContainer onPress={() => onPress({ id, title })}>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </ItemTextContainer>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
        />
      </ItemContainer>
    );
  }
);

const SettingScreen = ({ navigation }) => {

  const _handleItemPress = item => {
    if (item.id === 1)
      navigation.navigate('Account');
    if (item.id === 2)
      navigation.navigate('Alarm');
    if (item.id === 3)
      navigation.navigate('AlarmCycle');
    if (item.id === 4)
      navigation.navigate('Condition');
    if (item.id === 5)
      navigation.navigate('Personal');
    if (item.id === 6)
      navigation.navigate('Contact');
  };

  return (
    <Container>
      <Title>설정</Title>
      <FlatList
        keyExtractor={item => item['id'].toString()}
        data={lists}
        renderItem={({ item }) => (
          <Item item={item} onPress={_handleItemPress} />
        )}
      />
    </Container>
  );
};

export default SettingScreen;

/*
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>키워드 관리 </Text>
      </View>
      <View style={styles.bottom_container}></View>
    </View>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    flex: 1,
    //backgroundColor: "white",
    borderBottomColor: "gainsboro", // 회색
    borderBottomWidth: 1.5,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "dodgerblue",
    paddingTop: Platform.OS === "android" ? 13 : 10,
  },
  bottom_container: {
    flex: Platform.OS === "android" ? 10.5 : 15, //이거 더 증가시키면 헤더 부분 작아짐
    //backgroundColor: "white",
    alignItems: "center",
  },
});
*/