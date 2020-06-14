import React, { useState } from 'react';
import './style.css';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import 'firebase/auth';

export default function RecuperarSenha(){

    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    function recuperar(){
        firebase.auth().sendPasswordResetEmail(email)
            .then(resultado => {
                setMsg('Enviamos um link no seu email para você redefinir sua senha!');
            }).catch(erro => {
                setMsg('Verifique se o email está correto');
            })
    }

    return(
        <>
            <Navbar />
            
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="mb-3 font-weight-bold">Recuperar Senha</h1>

                    <input  onChange={(e) => setEmail(e.target.value)} type="text" className="form-control my-2" placeholder="Email" />

                    <div className="msg my-4 text-center">
                        <span>{msg}</span>
                    </div>

                    <button onClick={recuperar} type="button" className="btn btn-lg btn-block btn-enviar">Enviar</button>

                </form>
                
            
        </>
    )
}