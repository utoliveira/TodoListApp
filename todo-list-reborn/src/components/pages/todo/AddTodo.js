import React, {useState, useContext} from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import api from '../../../packages/api';
import './Todo.css'

const AddTodo = () => {

    const [text, setText] = useState('');
    const [todos, setTodos] = useContext(TodoContext);

    const onChange = (e) =>{
        setText(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        api.post("/todo/add", {text: text})
            .then(res => {
                setTodos([...todos, res.data]);
                setText('');
            })
            .catch(err => console.log(`errou ein ${err}`))
    }  

    return(
        <form onSubmit={onSubmit} className="add-todo">
            <input className="add-todo__input" type="text" name="texto" placeholder="Nova tarefa" value={text} onChange={onChange}/>
            <input className="btn--submit" type="submit" value="+"/>
        </form>
    );
}

export default AddTodo;