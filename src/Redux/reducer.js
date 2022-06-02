import { ADD_COUNT , ADD_TODO,DEC_COUNT } from "./action";
import { store } from "./store";
const init={counter:0 , todos:[]}
export const counterReducer = (store=init,{type , payload})=>{
    switch(type){
        case ADD_COUNT: 
        return {...store, counter: store.counter + payload};
        case DEC_COUNT: 
        return {...store, counter: store.counter - payload};
        case ADD_TODO:
            return {...store, todos:[...store.todos,payload] }
        
        default: return store
    }
    
}