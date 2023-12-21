import React from 'react';
import { Modal, TouchableOpacity, Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const GenerateActionSheet = ({ actionSheetRef }) => {
    return (
        <ActionSheet ref={actionSheetRef} gestureEnabled={true} containerStyle={{ backgroundColor: '#2b3b8a', height: '40%' }} >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <TouchableOpacity style={{ padding: 10, alignItems: 'center', backgroundColor: '#ADD8E6', marginBottom: 10, borderRadius: 10 }}>
                    <Text>
                        Add Next Generation
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, alignItems: 'center', backgroundColor: '#ADD8E6', marginBottom: 10, borderRadius: 10 }}>
                    <Text>
                        Add Same Generation
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, alignItems: 'center', backgroundColor: '#ADD8E6', borderRadius: 10 }}>
                    <Text>
                        Add Prior Generation.
                    </Text>
                </TouchableOpacity>
            </View>
        </ActionSheet>
    );
};

export default GenerateActionSheet;