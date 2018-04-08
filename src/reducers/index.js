import { Game } from '../model/model'

const processReducer = (state, action) => {
  let Hra = new Game()
  Hra.import(state.Game);
  
  switch (action.type) {
    case 'FLIP':
    {
      Hra.flip(action.index);
      
      return {...state, Game: Hra}
      console.log(state.Hra.flipped);
      /*let newState = {...state};
      newState.Game.flip(action.index);
      console.log(newState);
      return newState;*/
    }
    default:
      return state
  }
}

export default processReducer
