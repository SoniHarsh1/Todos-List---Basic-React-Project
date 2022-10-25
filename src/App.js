import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {



  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    // Deleting this way will not work in React
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }


  const addTodo = (title, desc)=> {
    console.log("I am adding this ToDo", title, desc);

    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo])   // this will create an array of current todos and append the newly added todo to that array.
    console.log(myTodo)
  }



  const [todos, setTodos] = useState([
    {
      sno: 0, 
      title: "Get Started",
      desc: "Go and Add your first ToDo in the list"
    },
  ]);


  return (
    <>
    <Router>
   <Header title="My Todos List" searchbar={false}/>

   <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>          
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/> 
              </>
            )
          }}>  
          </Route>
          <Route exact path="/about">
          <About/>
          </Route>
    </Switch>


   <Footer/>
   </Router>
    </>
  );
}

export default App;
   