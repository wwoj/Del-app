import types from './types';


const INITIAL_ACTORS = {
    title:'Aktorzy',
    items:['Jan', 'Maria','Rokita']
  }

  function actorsReducer(state = INITIAL_ACTORS, action) {
    switch (action.type) {
      case types.ADD_ACTOR:
        return { ...state,items:[...state.items,action.item]}
      case types.RESET_ACTORS:
        return {
          ...state,items:[]
        };
      default:
        return state
    }
  }
  export default actorsReducer;