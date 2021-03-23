import * as React from 'react';

import Todo from '../components/Todo';
import { TodoContext } from '../context/todoContext';

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as ContextType
  return (
    <>
      {todos.map((todo: ITodo) => (
        <div>
            <label>todo.id</label><span>{todo.id}</span>
            <label>todo.title</label><span>{todo.title}</span>
            <label>todo.description</label><span>{todo.description}</span>
            <label>todo.status</label><span>{todo.status}</span>
        </div>
      ))}
    </>
  )
}

export default Todos