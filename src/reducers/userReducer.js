
import Actions from '../store/actions/actionTpye'


const initialState = {
    userList: [],
    POSTLIST:[],
        Delete : [],

}

function userReducer(state = initialState , action) {
  switch (action.type) {
    
   case Actions.HTTPREQUESTSUCCESS:
   console.log(action.payload[0]);
   return {... state ,userList:action.payload[0]}
  
 case Actions.HTTPPOSRREQUESTSUCCESS:

 console.log('tttttttttttttt',action.postList)
   return {... state ,POSTLIST:action.postList}


   case Actions.DELETEREQUESTSUCCESS : 
   return {... state , DeleteList : action.Delete[0]}
  
            // var state9 = Object.assign({},state,{userData:action.data})
            // state = state9
            // return state;
        
  default:
    return state
  }
}

export default userReducer;