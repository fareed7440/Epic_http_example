import { Observable } from 'rxjs';
import Actions from './actionTpye'
export default class UserEpic {

    static getUserData(action$){
        console.log(action$,"kkkkkkkkkkkkkkkkkkkk");
        
        return action$.ofType(Actions.HTTPREQUEST)
            .mergeMap(()=>{
                return Observable.ajax("https://randomuser.me/api/")
                    .pluck("response")
                    .switchMap((jsonData)=>{
                        var arr = [];
                        arr.push(jsonData)
                        console.log('arrayyy', arr)
                       // console.log("json Dataa ",jsonData)
                        return Observable.of(Actions.getUserSuccessful(arr));
                        
                    })
            })
    
    }}