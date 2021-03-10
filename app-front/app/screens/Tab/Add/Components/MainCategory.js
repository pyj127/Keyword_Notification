import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const category = [
  {
    label: "아주대학교 포탈",
    value: "아주대학교 포탈",
  },
  {
    label: "공과대학",
    value: "공과대학",
  },
  {
    label: "정보통신대학",
    value: "정보통신대학",
  },
  {
    label: "자연과학대학",
    value: "자연과학대학",
  },
  {
    label: "경영대학",
    value: "경영대학",
  },
  {
    label: "인문대학",
    value: "인문대학",
  },
  {
    label: "사회과학대학",
    value: "사회과학대학",
  },
  {
    label: "의과대학",
    value: "의과대학",
  },
  {
    label: "간호대학",
    value: "간호대학",
  },
  {
    label: "약학대학",
    value: "약학대학",
  },
  {
    label: "다산학부대학",
    value: "다산학부대학",
  },
  {
    label: "국제학부",
    value: "국제학부",
  },
];

const MainCategory = ({ main_cateValue, main_cateChange }) => (
  <View style={styles.container}>
    <View paddingVertical={6} />
    <RNPickerSelect
      placeholder={{
        label: "알림을 등록할 단과대를 고르세요.",
        value: null,
        color: "black",
      }}
      items={category}
      onValueChange={main_cateChange}
      style={pickerSelectStyles}
      value={main_cateValue}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    //borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 4,
    color: "black",
    backgroundColor: "whitesmoke",
    width: 330,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    //borderWidth: 0.5,
    borderColor: "purple",
    //borderRadius: 15,
    color: "rgba(0,0,0,0.7)",
    width: 320,
    height: 45,
    backgroundColor: "whitesmoke",
  },
  placeholder: {
    color: "rgba(0,0,0,0.3)",
  },
});
export default MainCategory;
