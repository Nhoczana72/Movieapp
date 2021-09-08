import {useState} from 'react'
import Picker from 'react-native-picker'
import {Alert}from 'react-native'

export const bookingLogic=(props)=>{
      
    
  const [bool, setbool] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [user, setUser] = useState({
    count: 0,
    book: false,
  });
  const [data, setdata] = useState([]);
    

    
  const [text, settext] = useState('');
  const submit = () => {
    let counts = 0;
    let a = [];
    for (var i = 0; i < 9; i++) {
      if (bool[i] == true) {
        counts = counts + 1;
        
      }
      if (bool[i] == true || data[i] == true) {
        a.push(true);
      } else {
        a.push(false);
      }
    }
    setbool(a);
    setUser({count: counts, book: true});
  };

  const clean=()=>{
    setbool([false,false,false,false,false,false,false,false,false]);
    settext('');
    setUser({count:0,book:false})

  }

    const select = index => {
        if (data[index] == false) {
          const a = [];
          for (var i = 0; i < 9; i++) {
            if (i == index) {
              a.push(!bool[i]);
              settext (text+" "+i);
            } else {
              a.push(bool[i]);
            }
          }
          setbool(a);
        } else Alert.alert('Message  T^T', `Someone booked seat before you!! Seat: ${index} \nPlease make another reservation`);
      };
    
    return{
        select,bool,data,user,submit,setdata,text,setUser,clean
    }


}