import {useState} from 'react'
import Picker from 'react-native-picker'

export const dataoption=()=>{
    const [rap,setrap]=useState([
        {name:'Aeon Bình Tân',value:'aeonbinhtan'},
        {name:'Aeon Tân Bình',value:'aeontanbinh'},
        {name:'Aeon Tân Phú',value:'aeontanphu'},
        {name:'CGV Hùng Vương',value:'cgvhungvuong'},
    ]);
    const [open, setOpen] = useState(false);

    const [namecinema,setnamecinema]=useState('Select Cinemar');
    const [day,setday]=useState('Select day');
    const [time,settime]=useState('Select time');
    const [room,setroom]=useState('Select room');
    const [valuecinema,setvalue]=useState({
        cinema:'',
        day:''
    })
    const [aeonbinhtan,setaeonbinhtan]=useState({
        ngay:[
            {ngay:'Ngày 27',value:'ngay27'},
            {ngay:'Ngày 28',value:'ngay28'},
        ],
        giongay27:[
            {gio:'2pm'},
            {gio:'5pm'},
        ],
        giongay28:[
            {gio:'2pm'},
        ],
        pm2ngay27:[
            'p1','p2','p3','p4','p5'
        ]
    })

    const showpicker = () => {

        const arrayname:any=[]
        rap.forEach((value) => arrayname.push(value.name))
        let options: any = {
          pickerData: [arrayname],
    
          onPickerConfirm: (data: any) => {
            
            for(var i=0;i<4;i++){
              if(rap[i].name==data){
                setvalue({...valuecinema,cinema:rap[i].value})
              }
            }
            setnamecinema(data)

    
          },
          onPickerCancel: (data: any) => {
            console.log(data);
          },
          onPickerSelect: (data: any) => {
            console.log(data);
          }
        }
    
        Picker.init(options);
        Picker.show();
    
      }
      const showpickerday = () => {
        const arrayday:any=[]
        aeonbinhtan.ngay.forEach((value) => arrayday.push(value.ngay))
        let options: any = {
          pickerData: [arrayday],
    
          onPickerConfirm: (data: any) => {
             
            for(var i=0;i<2;i++){
              if(aeonbinhtan.ngay[i].ngay==data){
                setvalue({...valuecinema,day:aeonbinhtan.ngay[i].value})
              }
            }
            setday(data)
          },
          onPickerCancel: (data: any) => {
            console.log(data);
          },
          onPickerSelect: (data: any) => {
            console.log(data);
          }
        }
    
        Picker.init(options);
        Picker.show();
    
      }
      

      const showpickertime = () => {

        const arraytime:any=[]
        aeonbinhtan.giongay27.forEach((value) => arraytime.push(value.gio))
        
        let options: any = {
          pickerData: [arraytime],
    
          onPickerConfirm: (data: any) => {
            settime(data)
          },
          onPickerCancel: (data: any) => {
            console.log(data);
          },
          onPickerSelect: (data: any) => {
            console.log(data);
          }
        }
    
        Picker.init(options);
        Picker.show();
    
      }
      const showpickerroom = () => {

        const arrayphong:any=[]
        aeonbinhtan.pm2ngay27.forEach((value) => arrayphong.push(value))
        
        let options: any = {
          pickerData: [arrayphong],
    
          onPickerConfirm: (data: any) => {
            setroom(data)
          },
          onPickerCancel: (data: any) => {
            console.log(data);
          },
          onPickerSelect: (data: any) => {
            console.log(data);
          }
        }
    
        Picker.init(options);
        Picker.show();
    
      }

    return{
        rap,room,
        showpickerroom,setrap,valuecinema,
        namecinema,showpickerday,
        showpickertime,setnamecinema,
        aeonbinhtan,open,setOpen,showpicker,day,time
    }


}