import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
  container:{
    backgroundColor : 'white',
    flex:1,
    alignItems:'center',
},
txtitle:{
    color:'#FF9900',
    fontSize:25,
    fontWeight:'bold',
    margin:5,
    marginTop:hp(20)
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
    height:hp(5),
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


})


  export default styles