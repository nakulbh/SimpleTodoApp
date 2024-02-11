const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  // console.log(todo)

  const createPayload = req.body;
  try {
    const validateTodo = createTodo.safeParse(createPayload);
    console.log("data is valid: ", validateTodo);
    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.json({
      msg: `Todo created successfully ${newTodo._id}`,
    });
  } catch (error) {
    console.error("validation error: ", error);
    res.status(500).json({
      msg: "validation error",
    });
  }

  res.json({
    msg: `Course created successfully ${newTodo._id}`,
  });
});

app.get("/todos", async (req, res) => {
  try {
    const response = await todo.find();

    res.json({
      todo: response,
    });
  } catch (error) {
    console.error("error: ", error);

    res.status(500).json({
      msg: "Error fetching todos",
    });
  }
});

app.put("/todos", async (req, res) => {
  const updatePlayload = req.body;
  try {
    const validateTodo = updateTodo.safeParse(updatePlayload);
    console.log(validateTodo);

    console.log(updatePlayload);

    await todo.findOneAndUpdate(updatePlayload, { compelted: true });
    res.json({
      msg: "todo marked as completed",
    });
  } catch (error) {
    console.error("validation error: ", error);
    res.status(500).json({
      msg: "validation error",
    });
  }
});
app.listen(3000);
