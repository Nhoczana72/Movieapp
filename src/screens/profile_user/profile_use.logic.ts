import {useState} from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { PermissionsAndroid } from 'react-native';
import lodash from 'lodash'

export const ProfileLogic=()=>{
    const [isopen,setopen]=useState({open:false})
    const [sourcepath, setsourcepath] = useState<any>({
      pathimage: [],
      load: false,
    });
    
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const chooseFile = () => {
    let options:any = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options,( response: any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const source: string = lodash.get(response?.assets, [0], '')        
        setsourcepath({pathimage: source, load: true});
        setopen({open:false})
      }
    });
  };

 const Camera = async() => {
   await requestCameraPermission();
    let options:any = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response: any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      
      } else {
        const source: string = lodash.get(response?.assets, [0], '')
        setsourcepath({pathimage:source,load:true})
        setopen({open:false})
      }
    });

  }
  

    return{
        isopen,setopen,sourcepath,chooseFile,Camera,setsourcepath
    }
}
