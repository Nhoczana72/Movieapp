/**
 * @format
 */

import {AppRegistry, View, YellowBox} from 'react-native';
import React, {useState} from 'react';
import Index from './src/navigation/index';
import {name as appName} from './app.json';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

// function App() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Apple', value: 'apple'},
//     {label: 'Banana', value: 'banana'}
//   ]);

//   return (
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//     />
//   );
// }
AppRegistry.registerComponent(appName, () => Index);
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
