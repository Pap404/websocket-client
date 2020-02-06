export const createMessage = (message) => {
  return ( (dispatch) => {
      console.log(message);
          dispatch(createMessageSuccess(message))
      }
  )
};

export const createMessageSuccess= (message)=>{
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
};