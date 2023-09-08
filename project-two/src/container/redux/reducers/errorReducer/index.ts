import { IS_ERROR, IS_ERRORMESSAGE } from "../../action-types"

const initialState = {
    isErrorType:false,
    isErrormMessage:''
}
const ErrorReducer = (state=initialState,action:{type:any}) =>{
switch(action.type){
    case IS_ERROR: return {...state,isErrorType:true}
    case IS_ERRORMESSAGE : return {...state,isErrorMessage:'technical glitch'}
}
}