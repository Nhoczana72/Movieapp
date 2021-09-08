import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
    viewcontainerdetail: {
      backgroundColor: 'black',
    },
    viewimage: {
      width: '100%',
      height: hp("27%"),
      alignItems: 'center',
      backgroundColor:'#333333'
    },
    image: {
      width: wp("95%"),
      height: hp("27%"),
      alignItems: 'center',
      backgroundColor:'gray'
    },
    viewtop: {
      flexDirection: 'column'
    },
    viewdetail: {
      width:  '100%',
      margin: 5,
      justifyContent:'space-evenly',
      flexDirection:'row'
    },
    viewtxdetail: {
        marginTop:10,width:wp(40)
    },
    txdetail: {
      color: 'white',
    },
    viewbtn: {
      flexDirection: 'row',justifyContent:'center'
    },
    btnsearch: {
      borderWidth: 1,
      borderColor: '#FFF000',
      backgroundColor: '#FF3300',
      height: 30,
      marginTop: 5,
      marginHorizontal:5
    },
  
    btntxsearch: {
      color: 'yellow',
      margin: 5,
      fontWeight: 'bold',
    },
  
    viewtxtitleitem: {
      color: 'white',
      textAlign: 'center',
    },
    viewitemvid: {
      marginVertical: 20,
      alignItems: 'center',
      height: hp(34),
      backgroundColor: '#222222',
      borderWidth: 1,
      borderColor: 'yellow',
      width: wp(100),
    },
    viewvid: {
      width: '100%',
      height: '85%',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    viewitemvidlandscape: {
      marginVertical: 20,
      alignItems: 'center',
      width: 550,
      height: hp(50),
      backgroundColor: '#222222',
      borderWidth: 1,
      borderColor: 'red',
    },
    viewvidlandscape: {
      width: '100%',
      height: '85%',
      borderWidth: 1,
  
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    txtitle:{
      color: '#FF9900',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:50
    },
    txrating:{
      color: '#f1c40f',
      textAlign: 'center',
      fontSize: 15,
    },
    sImage:{width: 150, height: 220},
    txtitlee:{
    color: '#f1c40f',
     fontSize: 20,
      textAlign: 'center',
      marginTop:wp(5)
    }
  });
  export default styles