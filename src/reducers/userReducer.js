
import Actions from '../store/actions/actionTpye'


const initialState = {
    userList: [],
    POSTLIST:[],
        DeleteList : [],

}

function userReducer(state = initialState , action) {
  switch (action.type) {
    
   case Actions.HTTPREQUESTSUCCESS:
   console.log(action.payload[0]);
   return {... state ,userList:action.payload[0]}
  
 case Actions.HTTPPOSRREQUESTSUCCESS:

 console.log('tttttttttttttt',action.postList)
   return {... state ,POSTLIST:action.postList}


   

   case Actions.DELETEREQUESTSUCCESS : {
      var loginState = Object.assign({}, state, { DeleteList: action.payload })
      state = loginState
      return state;


    }


  
           
        
  default:
    return state
  }
}

export default userReducer;