import * as usertypes from './actionTypes'

export const loadUsersStart = () => ({
    type:usertypes.LOAD_USERS_START,
});

export const loadUsersSuccess = (user) => ({
    type:usertypes.LOAD_USERS_SUCCESS,
    payload:user,
});

export const loadUsersError = (error)=>({
    type:usertypes.LOAD_USERS_ERROR,
    payload:error,
});

export const createUserStart = (users) => ({
    type:usertypes.CREATE_USERS_START,
    payload:users,
});

export const createUsersSuccess = () => ({
    type:usertypes.CREATE_USERS_SUCCESS,
    
});

export const createUsersError = (error)=>({
    type:usertypes.CREATE_USERS_ERROR,
    payload:error,
});

export const deleteUserStart = (userId) => ({
    type:usertypes.DELETE_USERS_START,
    payload:userId,
});

export const deleteUsersSuccess = (userId) => ({
    type:usertypes.DELETE_USERS_SUCCESS,
    payload:userId,
    
});

export const deleteUsersError = (error)=>({
    type:usertypes.DELETE_USERS_ERROR,
    payload:error,
});


export const updateUserStart = (userInfo) => ({
    type:usertypes.UPDATE_USERS_START,
    payload:userInfo,
});

export const updateUsersSuccess = () => ({
    type:usertypes.UPDATE_USERS_SUCCESS,
   
    
});

export const updateUsersError = (error)=>({
    type:usertypes.UPDATE_USERS_ERROR,
    payload:error,
});