const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the actio is " + action);
  let results = next(action);
  console.log("the state is " + store.getState());
  return results;
};
export default logger;
