import TodoItems from "./TodoItems";

const TodoList = ({ handleClick, handleDelete, handleEdit, setInputEdit, saveEdit }) => {

    return (
        <>
            <TodoItems
                handleClick={handleClick}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setInputEdit={setInputEdit}
                saveEdit={saveEdit}
            />
        </>
    )
}

export default TodoList
