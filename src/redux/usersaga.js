import {takeEvery , put ,all,delay,fork,call , takeLatest , take} from 'redux-saga/effects';
import * as types from './actionTypes';
import { loadUsersError, loadUsersSuccess ,createUsersSuccess,createUsersError ,deleteUsersSuccess , deleteUsersError, updateUsersSuccess, updateUsersError} from './action';

import { createUserApi, loadUserApi , deleteUserApi, updateUserApi } from './api';


export function* onLoadUserStartAsync(){
    try{
          const response = yield call(loadUserApi);
          if(response.status === 200){
              yield delay(500);
              yield put(loadUsersSuccess(response.data));
          }
    }catch(error){
        yield put(loadUsersError(error.response.data));
    }
}

export function* onCreateUserStartAsync({payload}){
    try{
          const response = yield call(createUserApi,payload);
          if(response.status === 200){
              
              yield put(createUsersSuccess(response.data));
          }
    }catch(error){
        yield put(createUsersError(error.response.data));
    }
}

function* onDeleteUserStartAsync(userId){
    try{
        const response = yield call(deleteUserApi, userId);
        if(response.status === 200){
            yield delay(500);
            yield put(deleteUsersSuccess(userId));
        }
  }catch(error){
      yield put(deleteUsersError(error.response.data));
  }
}


export function* onUpdateUserStartAsync({payload : {id , formValue}}){
    try{
           const response = yield call(updateUserApi, id, formValue);
           if(response.status === 200){
               yield put(updateUsersSuccess());
           }
    }catch(error){
         yield put(updateUsersError(error.respone.data));
    }
 }


export function* onLoadUsers(){
    yield takeEvery(types.LOAD_USERS_START , onLoadUserStartAsync);
}

export function* onCreateUsers(){
    yield takeLatest(types.CREATE_USERS_START , onCreateUserStartAsync);
}

export function* onDeleteUsers(){
    while(true){
        const { payload : userId } = yield take(types.DELETE_USERS_START);
        yield call( onDeleteUserStartAsync ,userId);
    }
   
}



export function* onUpdateUsers(){
    yield takeLatest(types.UPDATE_USERS_START , onUpdateUserStartAsync);
}


const userSaga = [
    fork(onLoadUsers),
    fork(onCreateUsers),
    fork(onDeleteUsers),
    fork(onUpdateUsers),
]

export default function* rootSaga(){
    yield all([...userSaga]);
}

