export function CreateTodo() {
  return (
    <div>
      <input
        style={{
          padding: "10px",
          margin: "10px",
          border: "6px solid #ccc",
        }}
        type="text"
        placeholder="Title"
      ></input>
      <br />
      <input
        style={{
          padding: "10px",
          margin: "10px",
          border: "6px solid #ccc",
        }}
        type="text"
        placeholder="Description"
      ></input>{" "}
      <br />
      <button
        style={{
          padding: "10px",
          margin: "10px",
        }}
      >
        {" "}
        Add a Todo
      </button>
    </div>
  );
}
