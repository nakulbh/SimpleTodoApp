/* eslint-disable react/prop-types */
export function Todo({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            {" "}
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>{" "}
            <button>
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>{" "}
          </div>
        );
      })}
    </div>
  );
}
