import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 
const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      backgroundColor:'black'
  },
  txtitle: {
    color: '#FF9900',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    textAlign:'center',
},
viewitem:{
    marginTop:wp(33),
    width:wp(80),
    alignItems:'center'
},
btnlogin:{
    borderWidth:1,
    borderColor:'#FF9900',
    borderRadius:wp(5),
    height:hp(7),
    width:wp(30),
    backgroundColor:'red',
    marginVertical:10,
    width:wp(100)


},

btntx:{
    color:'white',
    margin:5,
    textAlign:'center',
    fontWeight:'700',
    fontSize:25
    
},
  
});

  export default styles