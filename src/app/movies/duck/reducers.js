import types from './types';

const initialMovies = {
    title:'Filmy',
    items:['Matrix', 'Hulk','Batman']
  }

  function moviesReducers(state = initialMovies, action) {
    switch (action.type) {
      case types.ADD_MOVIE:
        return { ...state,items:[...state.items,action.item]}
      case types.RESET_MOVIES:
        return {
          ...state,items:[]
        };
      default:
        return state
    }
  }
  export default moviesReducers;