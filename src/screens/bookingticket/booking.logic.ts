import {useState} from 'react'
import Picker from 'react-native-picker'
import {Alert}from 'react-native'

export const bookingLogic=(props)=>{
    const [inittializing, setInitiallizing] = useState(true);
    const [users, setuser] = useState();      
    
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
    function onAuthStateChanged(user) {
      setuser(user._user.email);
      if (inittializing) setInitiallizing(false);
    }

    
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
        } else Alert.alert('aaaa', `Ai đó đã đặt vị trí ${index} trước bạn rồi!!`);
      };
    
    return{
        users,onAuthStateChanged,select,bool,data,user,submit,setdata,text,setUser,clean
    }


}