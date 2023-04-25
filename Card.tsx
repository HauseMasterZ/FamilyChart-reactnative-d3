// import FamilyChart from 'family-chart';
// import styles from './family-chart.css';

// import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, useDerivedValue, runOnJS } from 'react-native-reanimated';
// import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent, PinchGestureHandler, PinchGestureHandlerGestureEvent, State } from 'react-native-gesture-handler';
import React, { useRef } from 'react';
// import {createStackNavigator} from "@react-navig"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, StatusBar, Button, Pressable } from 'react-native';
import { Dimensions, Image } from "react-native";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useState, } from 'react';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import * as ImagePicker from 'expo-image-picker'
// import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
// import editScreen from './EditScreen';

const TreeCard = () => {
  // const [name, setName] = useState('Name Surname')
  const [dob, setDob] = useState(['0'])
  const [visibleModal, setVisibleModal] = useState(false)
  const [currIndex, setcurrIndex] = useState(0)
  const [CurrentIndexName, setCurrentIndexName] = useState('Name Surname')
  const showEditModal = () => setVisibleModal(true)
  const hideEditModal = () => setVisibleModal(false)
  const [AllPhotos, setAllPhotos] = useState(['https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg']);

  const openPicker = async (i: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1
    })
    if (!result.canceled) {
      // setGalleryPhoto(result.assets[0].uri)
      let old_photos = [...AllPhotos]
      old_photos[i] = result.assets[0].uri
      setAllPhotos(old_photos)

    }
  }

  const [radioButtons, setRadioButtons] = useState([
    [{
      id: '0', // acts as primary key, should be unique and non-empty string
      label: 'Male',
      value: 'Male',
      "selected": false,
    },
    {
      id: '1',
      label: 'Female',
      value: 'Female',
      "selected": false,
    }]
  ]);

  const [usePink, setUsePink] = useState(false)

  const [cardColors, setCardColors] = useState([true, true])

  const [names, setNames] = useState(['Name Surname'])

  function onPressRadioButton(radioButtonsArray, indexofCard) {
    if (!radioButtonsArray[0]['selected']) {
      let old_colors = [...cardColors]
      old_colors[indexofCard] = false
      setCardColors(old_colors)
    }
    else {
      let old_colors = [...cardColors]
      old_colors[indexofCard] = true
      setCardColors(old_colors)
    }
    if (!indexofCard || indexofCard < 0) {
      return
    }
    let old_radio = radioButtons;
    old_radio[indexofCard] = radioButtonsArray
    setRadioButtons(old_radio)

  }

  const setDobName = (event, ind) => {
    // console.log(ind)
    let old_dobs = dob
    old_dobs[ind] = event
    setDob(old_dobs)
  }
  const setIndexName = (event, ind) => {
    // console.log(ind)
    let tmp_names = names
    tmp_names[ind] = event
    setNames(tmp_names)
  }

  const turnPink = (ind) => {
    if (cardColors[ind]) {
      // console.log('gir')
      return { backgroundColor: '#b0dce4' }
    }
    else {
      return { backgroundColor: '#feb6c0' }
    }
  }

  const [input, setinput] = useState([''])

  const handleAdd = (index) => {
    // setAllPhotos([...AllPhotos, 'https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg'])
    let old_pics = [...AllPhotos]
    old_pics.splice(index+1, 0, 'https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg')
    setAllPhotos(old_pics)


    const newInputs = [...input]
    newInputs.push('')
    setinput(newInputs)



    // setCardColors([...cardColors, true])

    let old_cardcolors = [...cardColors]
    old_cardcolors.splice(index+1, 0, true)
    setCardColors(old_cardcolors)

    // setNames([...names, 'Name Surname'])
    let old_names = [...names]
    old_names.splice(index+1, 0, 'Name Surname')
    setNames(old_names)


    // setDob([...dob, '0'])
    let old_dobs = [...dob]
    old_dobs.splice(index+1, 0, '0')
    setDob(old_dobs)




    // setRadioButtons([...radioButtons, [{
    //   id: (index + 2).toString(), // acts as primary key, should be unique and non-empty string
    //   label: 'Male',
    //   value: 'Male',
    //   "selected": false,

    // },
    // {
    //   id: (index + 3).toString(),
    //   label: 'Female',
    //   value: 'Female',
    //   "selected": false,

    // }]])

    let old_radio = [...radioButtons]
    let tmp = [{
      id: (2).toString(), // acts as primary key, should be unique and non-empty string
      label: 'Male',
      value: 'Male',
      "selected": false,
  
    },
    {
      id: (3).toString(),
      label: 'Female',
      value: 'Female',
      "selected": false,
  
    }];
    old_radio.splice(index+1, 0, tmp)
    setRadioButtons(old_radio)
  }




  const handleRemove = (index: number) => {
    // console.log(index)
    if (index == 0) {
      alert("Root Node is required")
      return
    }
    const newInputs = [...input]
    newInputs.splice(index, 1)
    let old_photos = [...AllPhotos]
    old_photos.splice(index, 1)
    let old_names = [...names]
    old_names.splice(index + 1, 1)
    let old_dobs = [...dob]
    old_dobs.splice(index + 1, 1)
    setAllPhotos(old_photos)
    setinput(newInputs)
    setNames(old_names)
    setDob(old_dobs)
  }



  return (

    <View style={myStyles.body}>

      <ReactNativeZoomableView
        initialZoom={1}
        minZoom={0.15}
        maxZoom={10}
        bindToBorders={false}
        pinchToZoomInSensitivity={2}
        pinchToZoomOutSensitivity={2}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        visualTouchFeedbackEnabled={false}
        doubleTapZoomToCenter={false}
      >

        <View>
          {input.map((input, index) => (
            <View key={index}>
              {/* {displayLine(index)} */}
              <View style={[myStyles.card, turnPink(index)]}>
                <TouchableOpacity onPress={() => { openPicker(index) }} style={{ width: 100, height: 100 }}>
                  <Image style={[myStyles.avatar]} source={{ uri: AllPhotos[index] }} />
                </TouchableOpacity>
                <Text style={myStyles.naming}>
                  {/* {name ? (name) : ('Name Surname')} */}
                  {names[index] == '' ? 'Name Surname' : names[index]}
                </Text>
                <Text style={myStyles.dob}>
                  {/* {dob ? (dob) : ('0')} */}
                  {dob[index] == '' ? '0' : dob[index]}
                </Text>
                <TouchableOpacity style={myStyles.editBtn} onPress={() => { showEditModal(); setcurrIndex(index); }}>
                  <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/84/84380.png" }} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', left: '37%', top: '5%' }} >
                  <RadioGroup radioButtons={radioButtons[index]} onPress={(event) => { onPressRadioButton(event, index) }} layout='row' containerStyle={myStyles.gender}></RadioGroup>
                </View>

                <Modal
                  visible={visibleModal}
                  animationType='fade'
                  onRequestClose={hideEditModal}
                >
                  <Pressable style={myStyles.upper} onPress={hideEditModal} />
                  <View style={myStyles.lower}>
                    {/* <View style={{ position: 'absolute', left: '37%', top: '5%' }} >
                      <RadioGroup radioButtons={radioButtons[index]} onPress={(event) => { onPressRadioButton(event, currIndex) }} layout='row' containerStyle={myStyles.gender}></RadioGroup>
                    </View> */}
                    <TouchableOpacity onPress={hideEditModal} >
                      <Image style={{ height: 22, width: 22, backgroundColor: 'white', left: 5, top: 5 }} source={{ uri: 'https://static.thenounproject.com/png/809529-200.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleRemove(index); hideEditModal() }} style={{ width: 25, height: 25, left: '95%', bottom: 15 }} >
                      <Image style={{ height: 22, width: 22, left: '0%', top: '0%', }} source={{ uri: 'https://www.iconsdb.com/icons/preview/red/delete-xxl.png' }} />
                    </TouchableOpacity>
                    <TextInput style={{ padding: 10, borderWidth: 1, top: 40, width: '80%', left: "10%" }} onChangeText={(value) => { setIndexName(value, currIndex) }} placeholder='Name Surname' defaultValue={names[currIndex] == 'Name Surname' ? '' : names[currIndex]} >
                    </TextInput>
                    <TextInput style={{ padding: 10, borderWidth: 1, top: 70, width: '80%', left: "10%" }} onChangeText={(value) => { setDobName(value, currIndex) }} placeholder='Date of Birth' defaultValue={dob[currIndex] == '0' ? '' : dob[currIndex]} >
                    </TextInput>
                  </View>
                </Modal>

                <TouchableOpacity style={myStyles.plusBtn} onPress={() => { handleAdd(index) }}>
                  <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png" }} style={{ width: '100%', height: '100%' }} />
                </TouchableOpacity>

              </View>
              <View>
                <Image style={myStyles.line}></Image>
                {/* <Image style={myStyles.line}></Image> */}

              </View>

            </View>

          ))}

        </View>
        {/* <Button title='add' onPress={handleAdd} /> */}
      </ReactNativeZoomableView>
    </View>


  )
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: 'bold',
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
// });


const myStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3a5561',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
  ,
  card: {
    height: 140,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 6,

  },
  avatar: {
    height: 100,
    width: 100,
    left: 10,
  },
  naming: {
    color: '#3a5561',
    fontSize: 20,
    left: 125,
    position: 'absolute',
    top: 40
  },
  dob: {
    position: "absolute",
    color: "#3a5561",
    fontSize: 20,
    left: 125,
    top: 70
  },
  editBtn: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 220,
    top: 110
  },
  plusBtn: {
    height: 24,
    width: 24,
    position: 'absolute',
    top: 108,
    left: 260,
  },
  upper: {
    height: '60%',
    backgroundColor: '#DDD',
    opacity: 0.5
  },
  lower: {
    flex: 1,
    backgroundColor: 'white'
  },
  gender: {
    position: 'absolute',
    left: '25%'
  },
  line: {
    backgroundColor: '#a8b5b9',
    width: 2,
    height: 100,
    left: '50%'
  }
});



export default TreeCard;