const SAVE_CARD1 = "SAVE_CARD1";
const SAVE_CARD2 = "SAVE_CARD2";
const FLIP_CARD = "FLIP_CARD";


function doubleCards(array){
  for(var i = array.length -1; i >= 0 ; i--){
    array.push(array[i])
  }
  return array
}


export function saveCard1(key, face) {
    return {
      type: SAVE_CARD1,
      payload: {key, face}
    };
  }

  export function saveCard2(key, face) {
    return {
      type: SAVE_CARD2,
      payload: {key, face}
    };
  }  

  export function flipCard(index) {
    return {
      type: FLIP_CARD,
      payload: index
    };
  }  

  const initialState = {
    cardArray:doubleCards(["❤","★","✿","♛",'♣','♜','Ⅷ','⊜']),
    flippedByIndex:[],
    key1: '',
    face1: '',
    key2: '',
    face2: ''
  };


  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case SAVE_CARD1:
    return Object.assign({}, state, { key1: action.payload.key, face1: action.payload.face });
    case SAVE_CARD2:
    return Object.assign({}, state, { key2: action.payload.key, face2: action.payload.face });
    case SAVE_CARD2:
    return Object.assign({}, state, {flippedByIndex: state.flippedByIndex} );
    default:
    return state; 
    }
  }