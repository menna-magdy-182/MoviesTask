import React, { useState } from "react";
import { View, FlatList, Pressable } from "react-native";
import {  CommonStyles } from "../../constants";
import { Movie } from "../../interfaces";
import CrudModal from "./CrudModal";
import MovieItem from "./MovieItem";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from "react-redux";
import { ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE } from "../../redux/types";
import styles from "./styles";
interface props {
  categoryID: Number
}
const CategoryDetails = (props) => {

  const guidGenerator = () => new Date().getUTCMilliseconds();
  const { categoryID } = props.route.params
  const { categories } = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch()
  const [modalData, setModalData] = useState();
  const onPressMovieHandler = (item: Movie, operation:string) => {
    setModalData({ item, operation })
  }
  const onCloseModalHandler = () => setModalData(null);

  const onAddHandler = () => {
    onPressMovieHandler({ name: '', id: guidGenerator(), description: '', rate: "5" }, "ADD")
  }
  const handleOperation = (payload: any) => {
    const { item, operation } = modalData;
    setModalData(null);
    if (operation === "ADD")
      dispatch({
        type: ADD_MOVIE,
        payload: { categoryID, movie: payload },
      });

    else if (operation === "UPDATE")
      dispatch({
        type: UPDATE_MOVIE,
        payload: { categoryID, movie: payload },
      });

    else if (operation === "DELETE")
      dispatch({
        type: DELETE_MOVIE,
        payload: { categoryID, movieID: item.id },
      });
  }
  return (
    <View style={CommonStyles.screensContainer}>
      <FlatList<Movie>
        data={categories.length ? categories.filter(c => c.id === categoryID)[0].movies : []}
        renderItem={({ item, index }) => (
          <MovieItem item={item} onPressMovie={onPressMovieHandler} />
        )}
      />
      {modalData &&
        <CrudModal modalData={modalData} onRequestClose={onCloseModalHandler} onSubmit={handleOperation} />
      }
      <Pressable style={styles.addBtn} onPress={onAddHandler}>
        <MaterialCommunityIcon name="plus" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};

export default CategoryDetails;


