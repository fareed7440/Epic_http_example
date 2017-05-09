import { Observable } from 'rxjs';
import Actions from './actionTpye'
export default class UserEpic {

    static getUserData(action$) {
        console.log(action$, "kkkkkkkkkkkkkkkkkkkk");

        return action$.ofType(Actions.HTTPREQUEST)
                   .mergeMap(() => {
                    return Observable.ajax("http://localhost:8080/api/todos")
                    .pluck("response")
                    .switchMap((jsonData) => {
                        var arr = [];
                        arr.push(jsonData)
                        console.log('arrayyy', arr)
                        // console.log("json Dataa ",jsonData)
                        return Observable.of(Actions.getUserSuccessful(arr));

                    })
            })
    }

    static getPostData(action$, obj) {


        return action$.ofType(Actions.POSTREQUEST)
               .map(action => action.payload)
              .switchMap(query =>
                Observable.ajax({ url: 'http://localhost:8080/api/todos', body: { text: query.msg }, headers: { "Content-Type": 'application/json' }, method: 'post' }))
               .switchMap((postdata) => {
                console.log('posttttttt', postdata)
                var arr1 = [];
                arr1.push(postdata);
                console.log('arrrrr1111', arr1)
                return Observable.of(Actions.getPostDataSuccess(arr1))
            })




    }


    static DeleteFunction(action$,_id) {
    return action$.ofType(Actions.DELETEREQUEST)
               .map(action => action.payload)
              .switchMap(data =>
                Observable.ajax({ url: 'http://localhost:8080/api/todos : id', body: { text: _id }, headers: { "Content-Type": 'application/json' }, method: 'delete' }))
                .switchMap((deleteData) => {
                console.log('Deleteee data', deleteData)
                var arr2 = [];
                arr2.push(deleteData);
                console.log('arrr2', arr2)
                return Observable.of(Actions.DeleteSuccess(arr2))
            })

    }



}