import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { setTodos } from "../services/stateService";
import { Container } from "@mui/system";
import { useEffect, useState } from "react"

const Content = () => {
    const [inputEdit, setInputEdit] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(todos));
    }, [todos])

    const handleClick = (id) => {
        const newTodos = todos.map(todo => {
            return todo.id === id ? {
                ...todo,
                completed: !todo.completed
            } : { ...todo }
        });
        dispatch(setTodos(newTodos));
    }

    const handleDelete = (id) => {
        const listItems = todos.filter(item => item.id !== id);
        dispatch(setTodos(listItems))
    }

    const handleEdit = (e, id) => {
        e.target.parentNode.parentNode.children[1].focus();
        e.target.parentNode.parentNode.children[1].classList.add('edit-bg');
        e.target.parentNode.parentNode.children[0].classList.add('hidden');
        const editTodo = todos.map(todo => {
            return todo.id === id ? {
                ...todo,
                completed: false,
                readonly: false,
            } : { ...todo }
        });
        dispatch(setTodos(editTodo));
    }

    const saveEdit = (e, id) => {
        e.target.parentNode.parentNode.children[1].classList.remove('edit-bg')
        e.target.parentNode.parentNode.children[0].classList.remove('hidden')
        const editTodo = todos.map(todo => {
            return todo.id === id ? {
                ...todo,
                completed: false,
                title: e.target.parentNode.parentNode.children[1].value,
                readonly: true,
            } : { ...todo }
        });
        dispatch(setTodos(editTodo));
        console.log(todos);
    }

    return (
        <>
            <main>
                <Container>
                    <TodoList
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        inputEdit={inputEdit}
                        setInputEdit={setInputEdit}
                        saveEdit={saveEdit}
                    />
                </Container>
            </main>
        </>
    )
}

export default Content;