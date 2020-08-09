import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import auth from '../../../../packages/Auth';
import './LoginDialog.css'

const LoginDialog = (props) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const updateUser = (e) =>{
        setUser(e.target.value);
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value)
    }

    const login = (e) =>{
        e.preventDefault();
        auth.login(() =>{
            props.history.push("/todo");
        });
    }

    return(
        <div className="login-panel">
            <form onSubmit={login}>
                <label>Utilizador</label>
                <input type="text" name="user" value={user} onChange={updateUser}/>

                <label>Senha</label>
                <input type="password" name="password" value={password} onChange={updatePassword}/>

                <input className="btn-primary" type="submit" />
            </form>
        </div>
    );
}

export default withRouter(LoginDialog);