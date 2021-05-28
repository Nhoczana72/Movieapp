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
      width: wp("43%"),
      height: hp("30%"),
      
      alignItems: 'center'
    },
    viewtop: {
      flexDirection: 'row',
    },
    viewdetail: {
      width:  wp("57%"),
      height: hp(25),
      margin: 5,
      justifyContent:'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    viewtxdetail: {
        marginTop:10,
      width: wp(40),
      height: hp(25),
     
    },
    txdetail: {
      color: 'white',
      marginLeft:wp(5)
    },
    viewbtn: {
      flexDirection: 'row',
    },
    btnsearch: {
      borderWidth: 1,
      borderColor: '#FFF000',
      backgroundColor: '#FF3300',
      height: 30,
      marginLeft: 2,
      marginTop: 5,
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
      fontSize: 18,
      marginTop: 20,
    },
    sImage:{width: 150, height: 220},
    txtitlee:{
    color: 'yellow',
     fontSize: 20,
      textAlign: 'center',
      marginTop:wp(5)
    }
  });
  export default styles