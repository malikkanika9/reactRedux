export const ADD_COUNT = " ADD_COUNT";
export const DEC_COUNT = " DEC_COUNT";
export const ADD_TODO = "ADD_TODO";


export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};
export const decCount = (data) => {
    return {
      type: DEC_COUNT,
      payload: data,
    };
  };
 
  export const  addTodo = (data) => {
    return {
      type: ADD_TODO,
      payload: data,
    };
  };

  
   