import { ADD_COUNT ,DEC_COUNT } from "./action";
import { store } from "./store";
const init={counter:0 }
export const counterReducer = (store=init,{type , payload})=>{
    switch(type){
        case ADD_COUNT: 
        return {...store, counter: store.counter + payload};
        case DEC_COUNT: 
        return {...store, counter: store.counter - payload};
       
        default: return store
    }
    
}