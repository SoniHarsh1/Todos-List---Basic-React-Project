import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem';

export const Todos = (props) => {
  let myStyle ={
    minHeight: "40vh"
    }
  return (
    <div className='container border border-2 rounded-2 p-4 mt-4' style={myStyle}>
      <h3 className="text-center">Your Todos List</h3>
      <hr/>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })}
          </div>
  )
}
