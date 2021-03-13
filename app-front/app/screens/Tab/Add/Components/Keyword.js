import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import KeywordButton from './KeywordButton';

const Keyword = ({keyword, deleteKeyword}) => (
  <View style={styles.Container}>
    <View>
      <Text style={styles.todoText}>{keyword.title}</Text>
      <Text style={styles.cateText}>{keyword.cate}</Text>
    </View>
    <View style={styles.buttons}>
      <KeywordButton
        name="Delete"
        onPress={() => deleteKeyword(keyword.keywordIndex)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: Platform.OS === 'android' ? 'rgba(0,0,0,0.15)' : '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'android' ? 45 : 50,
    width: Platform.OS === 'android' ? 320 : 330,
    backgroundColor: 'white',
  },
  todoText: {
    color: Platform.OS === 'android' ? 'rgba(0,0,0,0.7)' : null,
    fontSize: 17,
  },
  cateText: {
    paddingTop: Platform.OS === 'android' ? 0.5 : 5,
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
});
export default Keyword;
