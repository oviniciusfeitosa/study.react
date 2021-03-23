import * as React from 'react';

import AddTodo from './components/AddTodo';
import Todos from './containers/Todos';
import TodoProvider from './context/todoContext';

export default function App() {
  return (
    <TodoProvider>
      <main className='App'>
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  )
}