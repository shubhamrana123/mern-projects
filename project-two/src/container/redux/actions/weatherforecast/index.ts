import { Path } from "../../../../config/helper-methods/server"
import axios from "axios"
export const weatherApi = (weatherBody:any,callback:Function) => async (dispatch:(args:{type:any,payload:any})=>void)=>{

    try{
const url ='http://localhost:4001/getPlan'
const data = await axios.get(url)

console.log('data',data);

    }
    catch(error){

    }
}
export const updateUser = (updateUserBody:any,callback:Function) => async(dispatch:(args:{type:any,payload?:any})=>void) =>{
    try{
const url = 'http://localhost:4001/updateUser'
const data = await axios.put(url,updateUserBody)
if(data){
    callback(data)
    console.log(data);
}


    }catch(err:any){

    }
}
export const deleteUser = (id:any,callback:Function) => async(dispatch:(args:{type:any,payload?:any})=>void) =>{
    console.log(id.id);
    
    try{
const url = `http://localhost:4001/deleteUser?id=${id.id}`
const data = await axios.delete(url,id.id
    )
if(data){
    callback(data)
    console.log(data);
}


    }catch(err:any){

    }
}
export const createUser  = (createUserBody:any,callback:Function) =>async (dispatch :(args:{type:any,payload?:any}) =>void)=>{
    try{
const url = 'http://localhost:4001/createUser';
const data = await axios.post(url,createUserBody)
if(data){
    callback(data)
}
    }
    catch(err:any)
    {
        console.log(err);
        
    }
}