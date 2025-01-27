const express = require ("express");
const { createTodo} = require("./types");
const { todo } = require("./db");
const app= express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success){
        res.status(411).json({
            msg:"Invalid payload"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo created"
    })
})


app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.parse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"Invalid payload"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo completed"

    })
})

app.listen(3000);