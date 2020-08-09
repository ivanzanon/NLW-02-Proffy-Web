import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
    return (
        <div id="page-login">
            <div className="right-panel" >
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
            </div>
            <div className="form-login-panel">
                <div className="form-login-container">
                    <h2>Fazer login</h2>
                    <form action="" className="form-login">
                        <input 
                            id="eMail" 
                            type="text" 
                            placeholder="E-mail"
                            className="input-email" />
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Password"
                            className="input-password"/>
                        <div className="remember-me-container">
                            <div className="input-remember-me-container">
                            <input 
                                id="rememberme" 
                                type="checkbox"
                                className="input-rememberme"/>
                                <label htmlFor="rememberme">Lembrar-me</label>
                            </div>
                            <a href="http://" >Esqueci minha senha</a>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
                <footer>
                    <div className="signup-container">
                        <h2>Não tem conta?</h2>
                        <a href="http://">Cadastre-se</a>
                    </div>
                    <div className="is-for-free-container">
                        <h2>É de graça</h2>
                        <img src={purpleHeartIcon} alt="Coraçãozinho roxo"/>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Login;