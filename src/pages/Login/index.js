import React, { useState } from "react";
import './login.css'
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    return (
        <div className="login">
            <div className="login">
                <div className="login-logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/2919/2919600.png" alt="Login App" />
                </div>
            </div>

            <div className="login-rigth">
                <h1>Acessar APP</h1>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input
                        type="email"
                        placeholder="Digite um E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                        type={show ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiOutlineEye
                            onClick={() => setShow(false)} 
                            />
                        ) : (
                            <HiOutlineEyeOff
                            onClick={() => setShow(true)}
                            />
                        )}
                    </div>
                </div>

                <button type="submit">Entrar</button>
                <button type="submit">Cadastrar</button>
            </div>
        </div>
    )
}

export default Login;