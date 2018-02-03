const FLIP_CARD1 = "FLIP_CARD1";
const FLIP_CARD2 = "FLIP_CARD2";


export function flipCard1(face) {
    return {
      type: FLIP_CARD1,
      payload: face
    };
  }

  export function flipCard2(face) {
    return {
      type: FLIP_CARD2,
      payload: face
    };
  }  

  const initialState = {
    card1: '',
    card2: ''
  };


  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case FLIP_CARD1:
    return Object.assign({}, state, { card1: action.payload });
    case FLIP_CARD2:
    return Object.assign({}, state, { card1: action.payload });

    }
  }      