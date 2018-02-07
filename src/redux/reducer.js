const FLIP_CARD = "FLIP_CARD";
const WRONG_CARD = "WRONG_CARD";

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
        console.log(pending)
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
    console.log(pending)
    var pendObj = {};
    pendObj[Object.keys(pending[0])] = "";  
    newArray.splice(array.indexOf(pending[0]), 1, pendObj)



    newArray.splice(newArray.indexOf(pending[0]), 1, obj)
    return {
    type: WRONG_CARD,
    payload: newArray
    };
  } 

  const initialState = {
    cardArray:doubleCards([0, 1, 2, 3, 4, 5, 6, 7]),
  };


  export default function reducer(state = initialState, action) {
    switch (action.type) {
    case FLIP_CARD :
    return Object.assign({}, state, {cardArray: action.payload});
    case WRONG_CARD :
    return Object.assign({}, state, {cardArray: action.payload});
    default:
    return state; 
    }
  }