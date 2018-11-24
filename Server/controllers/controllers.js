let todos=[{
    title:'add todos',
    id: 1
 },
 {
    title:'Do Todos',
    id:2
 },
]

let id=3

module.exports={
    getTodos: (req,res)=>{ // call it whatever you want he just wrote gettodos. you can call it readTodos or whatever.
        res.status(200).send(todos) // just reads todos. 
    },     
    createTodo:(req,res)=>{ // step 26
        const{title}= req.body  
        let newTodo={
            title,                     // title:title
            id,                         // id:id
        }
        id++ // next time a todo object is created if will have a differnt id
        todos.push(newTodo)
        res.status(200).send(todos)
    },    
    deleteTodo:(req,res)=>{ //28
        const{id}=req.params
        let index=todos.findIndex(todo=>todo.id===+id) // checks ids on the main object on line 1. this Id is a string so it will never equal true or false. thats why we wrote a + infront of id to tell it to evuluate it as a number. its the same as parseInt and number
        if(index !==-1) // means it has found a match. 
        todos.splice(index,1) // if it has found a match remove that item and send. 

    },            
    res.status(200).send(todos) //     
}
  {
    updateToDo:(res,req) //36
    //  grabs the object and updates the title string in todo card i think. 
    //
  }