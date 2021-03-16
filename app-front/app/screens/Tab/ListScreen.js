// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

// let message_title = '참가';
// let message_detail = '2020-2 아주대학교 동문장학생\n선발안내 ~(12/3, 17:00)';
// let navigate = '장학생,등록금';

// //웬만하면 message를 함수로 만들어서 추가될때마다 재사용하게끔 하기
// // const Message = ({ navigation }) => {
// //   return (
// //     <View style={styles.message}>
// //       <TouchableOpacity onPress={() => navigation.navigate("장학생,등록금")}>
// //         <View style={styles.message_tounchable}>
// //           <View style={{ marginLeft: 5 }}>
// //             <Image
// //               style={{ width: 80, height: 80 }}
// //               source={require("./ajou.png")}
// //             />
// //           </View>
// //           <View
// //             style={{
// //               paddingLeft: 10,
// //               paddingTop: 5,
// //             }}
// //           >
// //             <Text style={styles.message_title}>{message_title}</Text>
// //             <Text style={{ fontSize: 16 }}>{message_detail}</Text>
// //           </View>
// //         </View>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// const ListScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.bottom_container}>
//         <View style={styles.message}>
//           <TouchableOpacity onPress={() => navigation.navigate('장학생')}>
//             <View style={styles.message_tounchable}>
//               <View style={{marginLeft: 5}}>
//                 <Image
//                   style={{width: 80, height: 80}}
//                   source={require('./ajou.png')}
//                 />
//               </View>
//               <View
//                 style={{
//                   paddingLeft: 10,
//                   paddingTop: 5,
//                 }}>
//                 <Text style={styles.message_title}>장학생</Text>
//                 <Text style={{fontSize: 16}}>{message_detail}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.message}>
//           <TouchableOpacity onPress={() => navigation.navigate('장학생')}>
//             <View style={styles.message_tounchable}>
//               <View style={{marginLeft: 5}}>
//                 <Image
//                   style={{width: 80, height: 80}}
//                   source={require('./ajou.png')}
//                 />
//               </View>
//               <View
//                 style={{
//                   paddingLeft: 10,
//                   paddingTop: 5,
//                 }}>
//                 <Text style={styles.message_title}>채용</Text>
//                 <Text style={{fontSize: 16}}>
//                   {
//                     '신규 AI 프로젝트 리서치 엔지니어 \n(체험형 인턴십) ~(2/29, 17:00)'
//                   }
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
// export default ListScreen;

// const styles = StyleSheet.create({
//   container: {
//     //flex: 1,
//   },
//   bottom_container: {},
//   message: {
//     marginTop: 15,
//     flexDirection: 'row',
//     marginLeft: 10, //원래는 0
//   },
//   message_tounchable: {
//     flexDirection: 'row',
//     marginLeft: 10,
//     backgroundColor: 'white',
//     width: Platform.OS === 'android' ? 350 : 350, //원래는 android=335
//     borderRadius: Platform.OS === 'android' ? 15 : 20,
//     height: Platform.OS === 'android' ? 85 : 100,
//     paddingTop: Platform.OS === 'android' ? 2 : 15,
//   },
//   message_title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginBottom: Platform.OS === 'android' ? 3 : 5,
//   },
// });
