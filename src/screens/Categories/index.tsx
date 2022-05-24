import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import CommonStyles from '../../constants/CommonStyles';
import CategoryItem from './CategoryItem';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions';
import { Category } from '../../interfaces'


const Categories = ({ }) => {
  const { categories, loading } = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getCategories());


  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <View style={CommonStyles.screensContainer}>
      {loading &&
       <ActivityIndicator size={50} color={"#000"} />}
      <FlatList<Category>
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryItem item={item} />
        )}
      />

    </View>
  );
};

export default Categories;
