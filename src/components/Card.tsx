import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EditModal from './EditModal';
import GenerateActionSheet from './GenerateActionSheet';
import myStyles from '../static/styles/styles';
const Card = ({ index, openPicker, AllPhotos, names, dob, showEditModal, currIndex, setcurrIndex, visibleModal, hideEditModal, handleRemove, setIndexName, setDobName, radioButtons, onPressRadioButton, actionSheetRef, updateFamilyMembers }) => {
  const turnPink = () => {
    return index % 2 === 0 ? { backgroundColor: 'pink' } : {};
  };
  return (
    <View key={index} style={{ right: (index) * 200 }}>
      <View style={[myStyles.card, turnPink()]}>
        <TouchableOpacity onPress={() => { openPicker(index) }} style={{ width: 100, height: 100 }}>
          <Image style={[myStyles.avatar]} source={{ uri: AllPhotos[index] }} />
        </TouchableOpacity>
        <Text style={myStyles.naming}>
          {names[index] == '' ? 'Name Surname' : names[index]}
        </Text>
        <Text style={myStyles.dob}>
          {dob[index] == '' ? '0' : dob[index]}
        </Text>
        <TouchableOpacity style={myStyles.editBtn} onPress={() => { showEditModal(); setcurrIndex(index); }}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/84/84380.png" }} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <EditModal
          visibleModal={visibleModal}
          hideEditModal={hideEditModal}
          handleRemove={handleRemove}
          setIndexName={setIndexName}
          setDobName={setDobName}
          names={names}
          dob={dob}
          currIndex={currIndex}
          radioButtons={radioButtons}
          onPressRadioButton={onPressRadioButton}
          index={index}
          updateFamilyMembers={updateFamilyMembers}
        />
        <GenerateActionSheet actionSheetRef={actionSheetRef} />
        <TouchableOpacity style={myStyles.plusBtn} onPress={() => {
          actionSheetRef.current?.show()
        }}>
          <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png" }} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
      <View>
        <Image style={myStyles.vline}></Image>
        <Image style={myStyles.hline}></Image>
        <Image style={myStyles.veline}></Image>
      </View>
    </View>
  );
};

export default Card;