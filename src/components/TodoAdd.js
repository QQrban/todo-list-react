import { Container } from "@mui/system";
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from "react";
import { setTodos } from "../services/stateService";

const TodoAdd = () => {
    const [newInput, setNewInput] = useState('');

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const ref = useRef();

    const addItem = title => {
        const id = todos?.length ? todos[todos.length - 1].id + 1 : 1
        const newItem = {
            id,
            title,
            completed: false,
            readonly: true,
        }
        const listItem = [...todos, newItem]
        if (newInput === '') {
            alert('Input field cannot be empty');
            return false;
        };
        dispatch(setTodos(listItem));
        setNewInput('');
    }

    return (
        <>
            <Container>
                <h1>TODO List</h1>
                <div className="input-add">
                    <input
                        type="text"
                        className="eightbit-btn"
                        placeholder="Add your TODO here"
                        ref={ref}
                        onChange={e => setNewInput(e.target.value)}
                        value={newInput}
                    />
                    <button
                        className="eightbit-btn"
                        onClick={() => addItem(ref.current.value)}
                    >Add</button>
                </div>
            </Container>
        </>
    )
}

export default TodoAdd;