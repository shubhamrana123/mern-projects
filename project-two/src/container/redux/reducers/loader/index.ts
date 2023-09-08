import { START_LOADING, STOP_LOADING } from "../../action-types"

const initialState ={
    isLoading:false
}
const Loader = (state=initialState,action:{type:any}) =>{
    switch(action.type){
        case START_LOADING: return {...state,isLoading:true}
        case STOP_LOADING: return {...state,isLoading:false}
        default : return {...state}
    }
}