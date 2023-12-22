// EditModal.tsx
import React from 'react';
import { Modal, Pressable, View, TouchableOpacity, Image, TextInput } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
``
import myStyles from '../static/styles/styles';
const EditModal = ({ visibleModal, hideEditModal, handleRemove, setIndexName, setDobName, names, dob, currIndex, radioButtons, onPressRadioButton, index, updateFamilyMembers }) => {

    const handleEdit = (newDetails) => {
        // Update the details in the parent component
        updateFamilyMembers(index, newDetails);

        // Close the modal
        hideEditModal();
    };
    return (
        <Modal
            visible={visibleModal}
            animationType='fade'
            onRequestClose={hideEditModal}
        >
            <Pressable style={myStyles.upper} onPress={hideEditModal} />
            <View style={myStyles.lower}>
                <TouchableOpacity onPress={hideEditModal} >
                    <Image style={{ height: 22, width: 22, backgroundColor: 'white', left: 5, top: 5 }} source={{ uri: 'https://static.thenounproject.com/png/809529-200.png' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handleRemove(currIndex); hideEditModal() }} style={{ width: 25, height: 25, left: '95%', bottom: 15 }} >
                    <Image style={{ height: 22, width: 22, left: '0%', top: '0%', }} source={{ uri: 'https://www.iconsdb.com/icons/preview/red/delete-xxl.png' }} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', left: '37%', top: '5%' }} >
                    <RadioGroup radioButtons={radioButtons[currIndex]} onPress={(event) => { onPressRadioButton(event, currIndex) }} layout='row' containerStyle={myStyles.gender}></RadioGroup>
                </View>
                <TextInput style={{ padding: 10, borderWidth: 1, top: 40, width: '80%', left: "10%" }} onChangeText={(value) => { setIndexName(value, currIndex) }} placeholder='Name Surname' defaultValue={names[currIndex] == 'Name Surname' ? '' : names[currIndex]} >
                </TextInput>
                <TextInput style={{ padding: 10, borderWidth: 1, top: 70, width: '80%', left: "10%" }} onChangeText={(value) => { setDobName(value, currIndex) }} placeholder='Date of Birth' defaultValue={dob[currIndex] == '0' ? '' : dob[currIndex]} >
                </TextInput>
            </View>
        </Modal>
    );
};

export default EditModal;