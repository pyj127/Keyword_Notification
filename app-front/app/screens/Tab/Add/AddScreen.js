import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import KeywordInput from "./Components/KeywordInput";
import Button from "./Components/Button";
import KeywordList from "./Components/KeywordList";
import MainCategory from "./Components/MainCategory";
import SubCategory from "./Components/SubCategory";
//import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

let keywordIndex = 0;
let main_categoryIndex = 0;
let sub_categoryIndex = 0;

// url 직접입력할 때 사용
// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     {children}
//   </TouchableWithoutFeedback>
// );

class AddScreen extends Component {
  constructor() {
    super();
    this.state = {
      keywordValue: "",
      keywords: [],
      main_cateValue: "",
      main_categories: [],
      sub_cateValue: "",
    };
    this.submitKeyword = this.submitKeyword.bind(this);
    this.deleteKeyword = this.deleteKeyword.bind(this);
  }
  keywordChange(keywordValue) {
    this.setState({ keywordValue });
  }
  main_cateChange(main_cateValue) {
    this.setState({ main_cateValue });
  }
  sub_cateChange(sub_cateValue) {
    this.setState({ sub_cateValue });
  }
  submitKeyword() {
    if (
      !this.state.keywordValue ||
      !this.state.main_cateValue ||
      !this.state.sub_cateValue
    ) {
      return Alert.alert("세부사항을 모두 입력해주세요");
    }
    const keyword = {
      title: this.state.keywordValue,
      cate: this.state.sub_cateValue, //this is point!!!
      keywordIndex,
    };
    const main_category = {
      title: this.state.main_cateValue,
      main_categoryIndex,
    };
    keywordIndex++;
    main_categoryIndex++;
    const keywords = [...this.state.keywords, keyword];
    const main_categories = [...this.state.main_categories, main_category];
    this.setState({ keywords, keywordValue: "" });
    this.setState({ main_categories, main_cateValue: "" }); //이것도 필요하면 배열로 만들기
    this.setState({ keywords, sub_cateValue: "" });

    fetch("http://13.125.132.137:3000/keyword/add", {

      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        p_name: main_category.title,
        keyword: keyword.title,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        if (data.success === true) {
        console.log(data.r_id);
        console.log(keywordIndex);
          Alert.alert("정상적으로 키워드가 추가되었습니다.");
        } else {
          Alert.alert("키워드 추가가 불가능합니다.");
        }
      })

    Alert.alert("키워드 추가 완료");
  }

  deleteKeyword(keywordIndex) {
    let { keywords } = this.state;
    keywords = keywords.filter(
      (keyword) => keyword.keywordIndex !== keywordIndex
    );
    this.setState({ keywords });

    fetch("http://13.125.132.137:3000/keyword/delete", {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        r_id: this.state.keywordIndex,
      }),
    })
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((data) => {


        if (data.success === true) {
          Alert.alert("성공적으로 삭제되었습니다.");
        } else {
          //console.log("로그인 실패");
          Alert.alert("삭제가 불가능합니다.");
        }
      })

  }

  render() {
    let { keywordValue, keywords, main_cateValue, sub_cateValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_title}>키워드 추가 </Text>
        </View>

        <View style={styles.bottom_container}>
          <KeywordInput //키워드입력에 글자제한 줘야함
            keywordValue={keywordValue}
            keywordChange={(text) => this.keywordChange(text)}
          />
          <MainCategory
            main_cateValue={main_cateValue}
            main_cateChange={(value) => this.main_cateChange(value)}
          />
          <SubCategory
            main_cateValue={main_cateValue}
            sub_cateValue={sub_cateValue}
            sub_cateChange={(value) => this.sub_cateChange(value)}
          />
          <Button submitKeyword={this.submitKeyword} />
          <ScrollView style={styles.scroll}>
            <KeywordList
              deleteKeyword={this.deleteKeyword}
              keywords={keywords}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 38 : 0,
  },
  header: {
    flex: 1,
    borderBottomColor: "gainsboro", // 회색
    borderBottomWidth: 1.5,
    paddingBottom: 8,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: Platform.OS === "android" ? 0 : 10,
    color: "dodgerblue",
  },
  bottom_container: {
    flex: 18, //이거 더 증가시키면 헤더 부분 작아짐
    alignItems: "center",
    paddingBottom: 15,
  },
});
