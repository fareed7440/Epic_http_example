export default class Actions  {
  static  HTTPREQUEST = 'HTTPREQUEST';
  static  HTTPREQUESTSUCCESS = 'HTTPREQUESTSUCCESS';
  static  HTTPREQUESTFAILED = 'HTTPREQUESTFAILED';

    static getData(){
        return { 
            type: Actions.HTTPREQUEST
        }
    }

    static getUserSuccessful(userList){
        return { 
            type: Actions.HTTPREQUESTSUCCESS,
            payload: userList
        }
    }
}