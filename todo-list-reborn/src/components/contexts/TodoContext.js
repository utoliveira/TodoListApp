import React, {useState, createContext, useEffect} from 'react';

import api from '../../packages/api'
export const TodoContext = createContext();

export const TodoProvider = props =>{

    const [todos, setTodos] = useState([]);
        
    useEffect(()=>{
        /**Função auto anônima já executada */
        (async () =>{

            api.get("/todo/all")
                .then(res => setTodos(res.data))
                .catch(err => console.log(`errouu ${err}`));
        })();
    },[]);

    return(
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
}
