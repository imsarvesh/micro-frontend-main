// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "updateTodo":
      debugger
      return {
        ...state,
        todos: [...action.todos],
      };
    default:
      throw new Error("Unknown action!", action);
  }
};
