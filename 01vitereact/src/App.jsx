// import Code from './code'

// function App() {

//   return (
//    <>
//     <Code />
//      <h1>code and react</h1>
//    </>
//   )
// }

// export default App



import Todo from "./components/Todo"

function App() {

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            What needs to be done?
          </label>
        </h2>
        <input type="text"
        id="new-todo-input"
        className="input input_lg"
        name="text"
        autoComplete="off"
        />
        <button type="submit" className="btn btn_primary btn_lg">
          Add
        </button>
     </form>
     <div className="filters btn-group stack-exception">
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show</span>
        <span>All</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show</span>
        <span>All</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show</span>
        <span>All</span>
      </button>
     </div>
     <h2 id="list-heading">3 tasks remaining</h2>
     <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
      <Todo />
      <Todo />
      <Todo />
     </ul>
     </div>
  )
}

export default App
