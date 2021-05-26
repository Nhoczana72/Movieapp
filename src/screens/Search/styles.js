import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
  container:{
    backgroundColor : 'black',
    flex:1,
    alignItems:'center'
},
txtitle:{
    color:'#FF9900',
    fontSize:25,
    fontWeight:'bold',
    margin:5
},
inputtx:{
    backgroundColor:'gray',
    height:35,
    width:250,
    marginHorizontal:20
    
    
},
txviewsearch:{
    justifyContent:'space-around',
    margin:10,
    flexDirection:'row'
},
btnsearch:{
    borderWidth:1,
    borderColor:'#FF9900'

},

btntxsearch:{
    color:'white',
    margin:5,
    
},
scrollview:{
    height:300,
    backgroundColor:'black',
    marginHorizontal:5
    
},
itemscrollview:{
    flexDirection:'row',
    margin: 5,
    backgroundColor:'#111111'
},
})


  export default styles