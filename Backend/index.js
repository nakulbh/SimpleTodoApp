const express = require('express')
const {createTodo, updateTodo} = require("./types")

console.log(createTodo)

const app = express();

app.use(express.json());

app.post("/todo", (req, res) =>{
    let todo = {
        title: req.body.title,
        description: req.body.description
    }

    try {
        const validateTodo = createTodo.parse(todo)
        console.log("data is valid: ", validateTodo)
        
    } catch (error) {
        console.error("validation error: ", error)
        
    }

})

app.get("/todos", (req, res) =>{
let todo = {
        title: req.body.title,
        description: req.body.description
    }

    try {
        const validateTodo = createTodo.parse(todo)
        console.log("data is valid: ", validateTodo)
        
    } catch (error) {
        console.error("validation error: ", error)
        
    }

} )

app.put("/todos", (req, res) =>{

});
app.listen(3000);