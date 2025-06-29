function Todo(){
    return(
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked/>
                <label className="todo-label" htmlFor="todo-0">
                    Eat
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">Edit <span className="visually-hidden">Eat</span>
                </button>
                <button type="button" className="btn btn_danger">
                    Delete <span className="visually-hidden">Eat</span>
                </button>
            </div>
        </li>
    )
}

export default Todo;