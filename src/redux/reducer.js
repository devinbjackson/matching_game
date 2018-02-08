const FLIP_CARD = "FLIP_CARD";
const WRONG_CARD = "WRONG_CARD";
const USE_TRY = 'USE_TRY';

function doubleCards(array){
  var newArray = array.slice().concat(array.slice());
  for(var i = 0; i < newArray.length ; i++){
      var obj = {};
      obj[newArray[i]] = "";
      newArray.splice(i,1,obj);
  }
  return newArray
}

  export function flipCard(index, array) {

    const pending = array.filter(function(elem, ind){
      return (elem[Object.keys(array[ind])[0]] === "flipped pending")})  
      

    const face = Object.keys(array[index])[0]
        const newArray = array.slice();
        var obj = {};

        if(pending.length && newArray[index][face] === "" && Object.keys(pending[0])[0] === face){
        obj[face] = "flipped solved";  
        newArray.splice(index, 1, obj)
        newArray.splice(newArray.indexOf(pending[0]), 1, obj)
        }else if(pending.length && newArray[index][face] === ""){
        obj[face] = "flipped wrong";  
        newArray.splice(index, 1, obj)
        }else if(!pending.length && newArray[index][face] === ""){
        obj[face] = "flipped pending"  
        newArray.splice(index, 1, obj)  
        }
    return {
    type: FLIP_CARD,
    payload: newArray
    };
  }
  
  export function wrongCard(index, array) {
    const pending = array.filter(function(elem, ind){
      return (elem[Object.keys(array[ind])[0]] === "flipped pending")}) 

    const face = Object.keys(array[index])[0]
    const newArray = array.slice();
    var obj = {};
    obj[face] = "";  
    newArray.splice(index, 1, obj)
    var pendObj = {};
    pendObj[Object.keys(pending[0])] = "";  
    newArray.splice(array.indexOf(pending[0]), 1, pendObj)



    newArray.splice(newArray.indexOf(pending[0]), 1, obj)
    return {
    type: WRONG_CARD,
    payload: newArray,
    };
  } 

  export function useTry(tries){
    return {
      type: USE_TRY,
      payload: --tries,
    }
  }

  const initialState = {
    cardArray:doubleCards([0, 1, 2, 3, 4, 5, 6, 7]),
    cardPictures: {
    0: 'https://vignette.wikia.nocookie.net/mario/images/4/40/SuperLeafSM3DL.png/revision/latest?cb=20180110005248',
    1: 'http://moziru.com/images/mario-clipart-flower-power-2.png',
    2: 'https://vignette.wikia.nocookie.net/nintendo/images/1/12/1upshroom.png/revision/latest?cb=20160922033647&path-prefix=en',
    3: 'http://vignette1.wikia.nocookie.net/fantendo/images/4/4c/Mushroom_%28Mario_Kart_8%29.png/revision/latest?cb=20141203012138',
    4: 'https://www.mariowiki.com/images/thumb/f/f5/StarMK8.png/200px-StarMK8.png',
    5: 'http://img4.wikia.nocookie.net/__cb20120716190352/fantendo/images/1/10/Ice_Flower2.png',
    6: 'https://vignette2.wikia.nocookie.net/nintendo/images/2/2f/Coin_-_New_Super_Mario_Bros.png/revision/latest?cb=20151206061007&path-prefix=en',
    7: 'http://img3.wikia.nocookie.net/__cb20131002142100/fantendo/images/8/83/DoubleCherry.png'},
    tries: 3
  };


  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case FLIP_CARD :
    return Object.assign({}, state, {cardArray: action.payload});
    case WRONG_CARD :
    return Object.assign({}, state, {cardArray: action.payload});
    case USE_TRY :
    return Object.assign({}, state, {tries: action.payload});
    default:
    return state; 
    }
  }