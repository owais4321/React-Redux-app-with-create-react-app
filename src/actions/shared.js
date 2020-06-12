export const RECIEVE_DATA = "RECIEVE_DATA";

function recieveData(todos, goals) {
  return {
    type: RECIEVE_DATA,
    todos,
    goals,
  };
}

export const initialDataHandler = () => {
  return (dispatch) => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(recieveData(todos, goals));
      }
    );
  };
};
