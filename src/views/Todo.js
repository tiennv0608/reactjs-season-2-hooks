const Todo = (props) => {
  const todos = props.todos;
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">{props.title}</div>
        {todos.map((todo) => {
          return (
            <li className="todo-child" key={todo.id}>
              {todo.title}
            </li>
          );
        })}
      </div>
      <hr />
    </>
  );
};

export default Todo;
