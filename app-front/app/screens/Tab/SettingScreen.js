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
