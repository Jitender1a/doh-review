import React, {Component} from 'react'
import Header from './Header'   //set 23
import axios from 'axios'      // step 24
import TodoCard from './TodoCard' // step 31


class Todos extends Component{
    constructor(){                    // step 24
        super()
        this.state={
            todos:[],
            userInput:'',
        }
        this.handleInput=this.handleInput.bind(this)
        this.handleAddTodo=this.handleAddTodo.bind(this)
        this.deleteTodo=this.deleteTodo.bind(this)
        this.updateTodo=this.updateTodo.bind(this)
    }
                            
    componentDidMount(){   //  need to use this to run the code so it can render. it will say the component has been created so run some code. 
            axios.get('/api/todos').then(results=>{            // the param is the path to the server. only needs one param. The path was created in package.js in line 6. the proxy
                this.setState({todos:results.data})                                              // console.log('todos',results)            // go to inspect, then console, should say todos. pull out the data function thats all we need. 
                                                        // its just data because we are doing the by end so we know what we are getting
            }) 
    }

    handleInput(e){   // need to bind this. 
        this.setState({userInput: e.target.value})
    }

    handleAddTodo(){ 
        axios.post('/api/todos',{title:this.state.userInput}).then(results=>{
            this.setState({
            todos:results.data})// will take the entire todos array and send it back to us. 
            // error here maybe
        })
    }

    deleteTodo(id){
        axios.delete(`/api/todos/${id}`).then(results=>{
            this.setState({
                todos:results.data
            })
        })
    }
    updateTodo(title,id){ //step 33
        axios.put(`api/todos/${id}`,{title}).then(results=>{
            this.setState({
                todos:results.data
            })
        })
    }


    render(){ //
        //console.log('state',this.state) // we are checking to make sure axios.get works. we are checking that the state works. 
        
        let todoList=this.state.todos.map(todo=>{ // mapping over the array
            return(
                <TodoCard  //31
                todo={todo}
                deleteTodo={this.deleteTodo}
                TodoCard={this.TodoCard}/>
            )
        })

        //console.log('input',this.state.userInput) // checking is handleInput which is attached to userInput works correctly. This check means that state is being updated

        return( 
            <div>
                <Header/>
                <input value={this.state.userInput} type='text' placeholder='something' onChange={this.handleInput}/> 
                <button onClick={this.handleAddTodo}>Add</button> 
                {todoList} 
            </div>
        )
    }

}
export default Todos