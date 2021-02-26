import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const category = [
  {
    label: "아주대학교 포탈",
    value: "portal",
  },
  {
    label: "공과대학",
    value: "eng",
  },
  {
    label: "정보통신대학",
    value: "it",
  },
  {
    label: "자연과학대학",
    value: "ns",
  },
  {
    label: "경영대학",
    value: "biz",
  },
  {
    label: "인문대학",
    value: "human",
  },
  {
    label: "사회과학대학",
    value: "coss",
  },
  {
    label: "의과대학",
    value: "medicine",
  },
  {
    label: "간호대학",
    value: "nursing",
  },
  {
    label: "약학대학",
    value: "pharm",
  },
  {
    label: "다산학부대학",
    value: "uc",
  },
  {
    label: "국제학부",
    value: "isa",
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
