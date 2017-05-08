export default class Actions  {
  static  HTTPREQUEST = 'HTTPREQUEST';
  static POSTREQUEST = 'POSTREQUEST';
  static  HTTPREQUESTSUCCESS = 'HTTPREQUESTSUCCESS'
   static  HTTPPOSRREQUESTSUCCESS = 'HTTPPOSTREQUESTSUCCESS';
   static DELETEREQUEST = 'DELETEREQUEST';
   static DELETEREQUESTSUCCESS = 'DELETEREQUESTSUCCESS';
   
static Delete(){
    return{
        type : Actions.DELETEREQUEST
    }
}

static  DeleteSuccess(_id){
    return{
        type  : Actions.DELETEREQUESTSUCCESS,
        payload : _id
    }
}
    static getData(){
        return { 
            type: Actions.HTTPREQUEST
        }
    }
static postData(obj){
    return{
        type : Actions.POSTREQUEST,
        payload:obj
    }
}
    static getUserSuccessful(userList){
        return { 
            type: Actions.HTTPREQUESTSUCCESS,
            payload: userList
        }
    }
static getPostDataSuccess(postList){
    return{
        type:Actions.HTTPPOSRREQUESTSUCCESS,
        postLoad : postList
    }
}



}