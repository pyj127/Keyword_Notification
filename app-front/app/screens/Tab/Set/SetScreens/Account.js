import React from 'react';
import FlatList from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

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
  title: `이메일 변경`,
});
lists.push({
  id: 2,
  title: `비밀번호 변경`,
});
lists.push({
  id: 3,
  title: `로그아웃`,
});
lists.push({
  id: 4,
  title: `회원 탈퇴`,
});

const Item = React.memo(({item: {id, title}, onPress}) => {
  return (
    <ItemContainer onPress={() => onPress({id, title})}>
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
      </ItemTextContainer>
      <Icon name="right" size={24} />
    </ItemContainer>
  );
});

const SettingScreen = ({navigation}) => {
  const _handleItemPress = (item) => {
    if (item.id === 1) navigation.navigate('EmailChange');
    if (item.id === 2) navigation.navigate('PWChange');
    if (item.id === 3) navigation.navigate('Logout');
    if (item.id === 4) navigation.navigate('Quit');
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item['id'].toString()}
        data={lists}
        renderItem={({item}) => <Item item={item} onPress={_handleItemPress} />}
      />
    </Container>
  );
};

export default SettingScreen;
