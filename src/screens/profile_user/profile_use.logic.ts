import { useEffect, useState } from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { Alert, PermissionsAndroid } from 'react-native';
import lodash from 'lodash'
import storage from '@react-native-firebase/storage'
import Auth from '@react-native-firebase/auth'
import { loading } from '../Loading/loading';

export const ProfileLogic = (props) => {
  const [inittializing, setInitiallizing] = useState(true);
  const [user, setUser]: any = useState();
  function onAuthStateChanged(user) {
    setUser(user._user.email);
    if (inittializing) setInitiallizing(false);
  }
  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [user]);

  const [isopen, setopen] = useState({ open: false })
  const [sourcepath, setsourcepath] = useState<any>();
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

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
    let options: any = {
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
    launchImageLibrary(options, (response: any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const source: string = lodash.get(response?.assets, [0], '')
        setsourcepath(source.uri);
        setopen({ open: false })

      }
    });
  };

  const Camera = async () => {
    await requestCameraPermission();
    let options: any = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response: any) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');

      } else {
        const source: string = lodash.get(response?.assets, [0], '')
        
        setsourcepath(source.uri)
        setopen({ open: false })
      }
    });

  }
  const uploadImage = async () => {
    const { uri } = sourcepath;
    setUploading(true);
    setTransferred(0);
    const task = storage()
      .ref(`${user}/`)
      .putFile(sourcepath, {
        cacheControl: 'no-store', // disable caching
      });
    // set progress state
    task.on('state_changed', snapshot => {
      console.log('loading',Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000)
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    console.log(transferred)
    setUploading(false);
    Alert.alert(
      "Update Image",
      "Update success!",
     
    );
  };


return {
  isopen,
  setopen,
  sourcepath,
  chooseFile,
  Camera,
  setsourcepath,
  uploadImage,
  user

}
}
