import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',backgroundColor:'#333333'
},
txtitle:{
    color:'#FF9900',
    fontSize:25,
    fontWeight:'bold',
    margin:5,
},
inputtx:{
    width: wp('90%'),
          height: hp(7),
          borderColor: 'green',
          borderWidth: 1,
          borderRadius: wp(5),
          marginVertical:10
},
btnlogin:{
    borderWidth:1,
    borderColor:'#FF9900',
    borderRadius:wp(5),
    height:35,
    width:wp(30),
    backgroundColor:'red',
    marginVertical:10
},
btntx:{
    color:'white',
    margin:5,
    textAlign:'center',
    fontWeight:'700',
    fontSize:16 
},
btnselect:{
    
},
viewitem:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:wp(100),
    backgroundColor:'yellow',
    height:25
},
viewtitleitem:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:wp(100),
    backgroundColor:'green',
    height:25
},



})


  export default styles