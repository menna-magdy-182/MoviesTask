import { DELETE_MOVIE, ADD_MOVIE, SET_CATEGORIES, UPDATE_MOVIE } from './types';
const initialState = {
    categories: [],
    loading: true
};
function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload, loading: false };
        case ADD_MOVIE: {
            const categories = state.categories
            const objIndex = categories.findIndex((obj => obj.id == action.payload.categoryID));
            categories[objIndex].movies = [...categories[objIndex].movies, action.payload.movie];
            return { ...state, categories: categories };
        }
        case DELETE_MOVIE: {
            const categories = state.categories
            const categoryIndex = categories.findIndex((obj => obj.id == action.payload.categoryID));
            categories[categoryIndex].movies = categories[categoryIndex].movies.filter(m => m.id !== action.payload.movieID);
            return { ...state, categories: categories };
        }
        case UPDATE_MOVIE: {
            const categories = state.categories
            const categoryIndex = categories.findIndex((obj => obj.id == action.payload.categoryID));
            const category = categories.find((obj => obj.id == action.payload.categoryID))
            const movieIndex = category.movies.findIndex(obj => obj.id == action.payload.movie.id);
            categories[categoryIndex].movies[movieIndex] = action.payload.movie
            return { ...state, categories: categories };
        }

        default:
            return state;
    }
}
export default moviesReducer;