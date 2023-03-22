import { useSelector } from "react-redux";
import trash from '../img/trash.png';
import pen from '../img/pen.png';
import floppy from '../img/floppy.png'

const TodoItems = ({ handleClick, handleDelete, handleEdit, setInputEdit, saveEdit }) => {

    const todos = useSelector((state) => state.todos);

    return (
        <div className="todo-items">
            {todos?.length ? todos.map(todo => (
                <div className="todo-item" key={todo.id} >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleClick(todo.id)}
                        id={todo.id}
                        className="eightbit-btn"
                    />
                    <input
                        defaultValue={todo.title}
                        readOnly={todo.readonly}
                        type="text"
                        onChange={(e) => setInputEdit(e.target.value)}
                        className="eightbit-btn input-txt"
                        style={(todo.completed) ? { textDecoration: "line-through", backgroundColor: "rgba(0, 128, 0, 0.527)", color: "white" } : null}
                    />
                    <div className="edit-delete">
                        <img
                            className='eddel floppy'
                            src={floppy}
                            alt="floppy disk"
                            onClick={(e) => saveEdit(e, todo.id)}
                        />
                        <img
                            className='eddel'
                            src={pen}
                            alt="pen"
                            onClick={(e) => handleEdit(e, todo.id)}
                        />
                        <img
                            className='eddel'
                            src={trash}
                            alt="trash"
                            onClick={() => handleDelete(todo.id)}
                        />
                    </div>
                </div>
            )) : <div>List is empty!</div>}
        </div>
    )
}

export default TodoItems
