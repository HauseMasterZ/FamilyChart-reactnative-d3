import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, StatusBar, Button, Pressable } from 'react-native';
import { Dimensions, Image } from "react-native";
import { RadioButtonProps } from 'react-native-radio-buttons-group';
import { ActionSheetRef } from 'react-native-actions-sheet';
import { useState, } from 'react';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import * as ImagePicker from 'expo-image-picker'
import myStyles from '../static/styles/styles';
import GenerateActionSheet from './GenerateActionSheet';
import familyMembers from '../static/data/familyMembers.json';
import EditModal from './EditModal';
import Card from './Card';

const TreeCard = () => {
  const [names, setNames] = useState(familyMembers.map(member => member.name));
  const [dob, setDob] = useState(familyMembers.map(member => member.age));
  const [AllPhotos, setAllPhotos] = useState(familyMembers.map(member => member.picture));
  // const [name, setName] = useState('Name Surname')
  const [visibleModal, setVisibleModal] = useState(false)
  const [currIndex, setcurrIndex] = useState(0)
  const [CurrentIndexName, setCurrentIndexName] = useState('Name Surname')
  const showEditModal = () => setVisibleModal(true)
  const hideEditModal = () => setVisibleModal(false)
  let addOption = ['Next Generation', 'Same Generation', 'Prior Generation', 'Cancel'];
  const actionSheetRef = useRef<ActionSheetRef>(null);

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

  function onPressRadioButton(radioButtonsArray: {
    id: string; // acts as primary key, should be unique and non-empty string
    label: string; value: string; selected: boolean;
  }[] | RadioButtonProps[] | { [x: string]: any; }[], indexofCard: number) {
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
    // old_radio[indexofCard] = radioButtonsArray
    setRadioButtons(old_radio)

  }

  const setDobName = (event: string, ind: number) => {
    // console.log(ind)
    let old_dobs = dob
    old_dobs[ind] = event
    setDob(old_dobs)
  }
  const setIndexName = (event: string, ind: number) => {
    // console.log(ind)
    let tmp_names = names
    tmp_names[ind] = event
    setNames(tmp_names)
  }

  const turnPink = (ind: number) => {
    if (cardColors[ind]) {
      // console.log('gir')
      return { backgroundColor: '#b0dce4' }
    }
    else {
      return { backgroundColor: '#feb6c0' }
    }
  }

  const [input, setinput] = useState([''])

  const handleAdd = (index: number) => {
    let old_pics = [...AllPhotos]
    old_pics.splice(index + 1, 0, 'https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg')
    setAllPhotos(old_pics)


    const newInputs = [...input]
    newInputs.push('')
    setinput(newInputs)

    // setCardColors([...cardColors, true])

    let old_cardcolors = [...cardColors]
    old_cardcolors.splice(index + 1, 0, true)
    setCardColors(old_cardcolors)

    // setNames([...names, 'Name Surname'])
    let old_names = [...names]
    old_names.splice(index + 1, 0, 'Name Surname')
    setNames(old_names)


    // setDob([...dob, '0'])
    let old_dobs = [...dob]
    old_dobs.splice(index + 1, 0, '0')
    setDob(old_dobs)

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
    old_radio.splice(index + 1, 0, tmp)
    setRadioButtons(old_radio)
  }

  const handleRemove = (index: number) => {
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

  let optionsArr = ['Add Prior Generation', 'Add Same Generation', 'Add Next Generation', 'Cancel']
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
            <Card
              index={0}
              openPicker={openPicker}
              AllPhotos={AllPhotos}
              names={names}
              dob={dob}
              showEditModal={showEditModal}
              currIndex={currIndex}
              setcurrIndex={setcurrIndex}
              visibleModal={visibleModal}
              hideEditModal={hideEditModal}
              handleRemove={handleRemove}
              setIndexName={setIndexName}
              setDobName={setDobName}
              radioButtons={radioButtons}
              onPressRadioButton={onPressRadioButton}
              actionSheetRef={actionSheetRef}
            />
        </View>

        {/* <Button title='add' onPress={handleAdd} /> */}
      </ReactNativeZoomableView>
    </View>


  )
};


export default TreeCard;