import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Modal from 'react-native-modal';
import { Rating } from "react-native-ratings";
import styles from './styles';
interface props {
    modalData: any;
    onRequestClose: any;
    onSubmit:(payload:any)=>void;
}
const CrudModal = ({ modalData, onRequestClose,onSubmit }: props) => {
const [name,setName]=useState(modalData.item.name);
const [description,setDescription]=useState(modalData.item.description);
const [rate,setRate]=useState(modalData.item.rate)
    return (
        <Modal
            style={styles.modal}
            isVisible={Boolean(modalData)}
            onBackButtonPress={onRequestClose}
            useNativeDriver
            swipeDirection={['down']}
            onSwipeComplete={onRequestClose}
            onBackdropPress={onRequestClose}
            onDismiss={onRequestClose}
        >
            <View
                style={styles.container}>
                {modalData && (modalData.operation === 'UPDATE' || modalData.operation === 'ADD') &&
                    <View>
                        <Text style={styles.inputTitle}>Name</Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={modalData.item.name}
                            onChangeText={setName}
                        />
                        <Text style={styles.inputTitle}>Description</Text>
                        <TextInput
                            style={styles.editor}
                            defaultValue={modalData.item.description}
                            onChangeText={setDescription}
                            multiline
                            scrollEnabled
                        />
                        <Text style={styles.inputTitle}>Rating</Text>

                        <Rating
                            ratingCount={5}
                            startingValue={parseFloat(modalData.item.rate)}
                            imageSize={15}
                            onFinishRating={(r)=>setRate(r.toString())}
                            style={{ alignSelf: 'flex-start' }}
                        />

                        <Pressable style={styles.saveBtn}
                        onPress={()=>onSubmit({name:name,description,rate,id:modalData.item.id})}>
                            <Text style={styles.btnsText}>Save</Text>
                        </Pressable>
                    </View>}
                {modalData && modalData.operation === 'DELETE' &&
                    <View>
                        <Text style={styles.deleteHintTxt}>Are you sure you want to delete the movie ?</Text>
                        <View style={styles.deleteBtnsContainer}>
                            <Pressable style={styles.cancelDeleteBtn}
                            onPress={onRequestClose}>
                                <Text style={styles.btnsText}>Cancel</Text>
                            </Pressable>
                            <Pressable style={styles.deleteBtn}
                            onPress={()=>onSubmit({})}>
                                <Text style={styles.btnsText}>Delete</Text>
                            </Pressable>
                        </View>

                    </View>}
            </View>
        </Modal>
    )

}


export default CrudModal;
