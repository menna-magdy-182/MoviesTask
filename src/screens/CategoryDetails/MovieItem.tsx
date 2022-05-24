import React from "react";
import { Text, Pressable, View } from "react-native";
import { Colors } from "../../constants";
import { calcFont } from "../../constants/sizes";
import { Movie } from "../../interfaces";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {  Rating } from "react-native-ratings";
import styles from "./styles";
interface props {
  item: Movie;
  onPressMovie:(item:Movie, operation:string )=>void
}
const MovieItem = ({ item,onPressMovie }: props) => {
  return (
    <Pressable style={styles.listItemContainer} >
      <View style={styles.header}>
        <Text style={styles.nameText}>
          {item.name}
        </Text>
        <View style={styles.icnsContainer}>
          <MaterialCommunityIcon name="circle-edit-outline" size={calcFont(18)} color={Colors.SECONDARYCOLOR}
            style={styles.editIcn} 
            onPress={()=>onPressMovie(item,"UPDATE") }/>
          <MaterialCommunityIcon name="delete" size={calcFont(19)} color={Colors.SECONDARYCOLOR}
           onPress={()=>onPressMovie(item,"DELETE") }
          />
        </View>
      </View>
      <View style={styles.ratingContainer} >
        <Rating
          readonly
          ratingCount={5}
          startingValue={parseFloat(item.rate)}
          imageSize={15}
        />
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </Pressable>
  )
};


export default MovieItem;
