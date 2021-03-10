import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';

import ListScreen from '../screens/Tab/List/ListScreen';
import IndividualScreen from '../screens/Tab/List/IndividualScreen';

const Tab = createMaterialTopTabNavigator();

const ListTabStack = () => {
    return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            tabStyle: { height: 60 }, //width: 100,
            labelStyle: { fontSize: 15 },
            style: { backgroundColor: 'white' },
          }}
        >
          <Tab.Screen name="학교 포탈" component={ListScreen} options={{ tabBarLabel: '학교 포탈' }}/>
          <Tab.Screen name="학과" component={IndividualScreen} options={{ tabBarLabel: '학과' }}/>
        </Tab.Navigator>
    );
}

export default ListTabStack;