import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet,Text, Pressable} from "react-native";
import { Colors } from "../../constants";
import { calcFont } from "../../constants/sizes";
import { category } from "../../interfaces";
interface props{
  item:category
}
const CategoryItem = ({item}:props) => {
  const navigation=useNavigation();
  const handleCategoryPress=()=>{
    navigation.navigate('CategoryDetails',{categoryID:item.id})
  }
    return (
      <Pressable style={styles.listItemContainer} onPress={handleCategoryPress}>
        <Text style={styles.nameText}>
          {item.name}
        </Text>
    
      </Pressable>
    );
  };

  export default CategoryItem;

  const styles = StyleSheet.create({ 
    listItemContainer: {
      paddingHorizontal: calcFont(10),
      paddingVertical: calcFont(15),
      marginTop: calcFont(20),
      marginHorizontal: calcFont(20),
      backgroundColor: Colors.MAINCOLOR,
      borderRadius:10,
      alignItems:'center'
    },

    nameText: {
      fontSize: calcFont(14),
      color: Colors.SECONDARYCOLOR,
    },

  });
  