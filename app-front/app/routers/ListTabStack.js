import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import ListScreen from '../screens/Tab/List/ListScreen';
import IndividualScreen from '../screens/Tab/List/IndividualScreen';

const Tab = createMaterialTopTabNavigator();

const Container = styled.View`
  flex: 0.07;
  margin-top: 16px;
  backgroundcolor: white;
  paddingtop: 10;
`;
const Header = styled.View`
  flex: 1;
  borderbottomcolor: gainsboro;
  borderbottomwidth: 1.5;
  paddingbottom: 8;
`;
const HeaderText = styled.Text`
  fontSize: 20;
  fontWeight: bold;
  textAlign: center;
  paddingTop: 0
  color: dodgerblue
`;

const ListTabStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Header>
          <HeaderText>공지 목록</HeaderText>
        </Header>
      </Container>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          tabStyle: {height: 50}, //width: 100,
          labelStyle: {fontSize: 15, fontWeight: 'bold'},
          style: {backgroundColor: 'white'},
        }}>
        <Tab.Screen
          name="학교 포탈"
          component={ListScreen}
          options={{tabBarLabel: '학교 포탈'}}
        />
        <Tab.Screen
          name="학과"
          component={IndividualScreen}
          options={{tabBarLabel: '학과'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default ListTabStack;
