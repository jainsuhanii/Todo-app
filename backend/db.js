const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.fhdy393.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema);

module.exports = {
    todo  
}