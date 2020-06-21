import React, { useState, useEffect } from 'react';
import './cadastro-fonte.css';
import Navbar from '../../../components/navbar/';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import firebase from '../../../config/firebase';
import 'firebase/auth';

function CadastroFonte(props){

    const [msgTipo, setMsgTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [flu, setFlu] = useState('');
    const [status, setStatus] = useState('');
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const db = firebase.firestore();

    const [load, setLoad] = useState();

    useEffect(() => {
        if(props.match.params.id){
        firebase.firestore().collection('fontes').doc(props.match.params.id).get()
            .then(resultado => {
                setDescricao(resultado.data().descricao)
                setFlu(resultado.data().flu)
                setStatus(resultado.data().status)
            })}
    },[props.match.params.id])

    function atualizar() {
        setLoad(1);
        setMsgTipo(null);

                db.collection('fontes').doc(props.match.params.id).update({
                    descricao: descricao.toUpperCase(),
                    flu: flu.toUpperCase(),
                    status: status.toUpperCase(),
                }).then(() => {
                    setLoad(0);
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setLoad(0);
                    setMsgTipo('erro');
                });
    }

    function cadastrar() {
        setLoad(1);
        setMsgTipo(null);

                db.collection('fontes').add({
                    descricao: descricao.toUpperCase(),
                    flu: flu.toUpperCase(),
                    tipo: 'fonte',
                    usuario: usuarioEmail,
                    status: status.toUpperCase(),
                    criacao: new Date(),
                }).then(() => {
                    setLoad(0);
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setLoad(0);
                    setMsgTipo('erro');
                });
                
    }
    
    return(
        <>
        <Navbar />

        {
            useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null
        }

        {
            msgTipo === 'sucesso' && <Redirect to="/home" />
        }

            
        <h3 className="text-center font-weight-bold my-2">{props.match.params.id ? 'Atualizar Fonte' : 'Cadastrar Fonte'}</h3>
            

        <div className="col-12 d-flex">
            
            <form className="form-input mx-auto" /*onSubmit={cadastrar}*/>

                <div className="form-group">
                    <label>Descrição</label>
                    <input onChange={(e) => setDescricao(e.target.value)} type="text" className="form-control" value={descricao && descricao} required/>
                </div>

                <div className="form-group">
                    <label>FLU</label>
                    <input onChange={(e) => setFlu(e.target.value)} type="text" className="form-control" value={flu && flu} required/>
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select onChange={(e) => setStatus(e.target.value)} className="form-control" value={status && status} required>
                        <option value="" selected disabled hidden>--Selecione um status--</option>
                        <option value="Manutenção" >Manutenção</option>
                        <option value="Disponivel" >Disponivel</option>
                    </select>
                </div>

                {
                    load ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div>    
                    : <button onClick={props.match.params.id ? atualizar : cadastrar} type="button" className="btn btn-lg btn-block btn-enviar">
                        {props.match.params.id ? 'Editar' : 'Cadastrar Equipamento'}
                    </button>
                }

            </form>

            <div className="msg-login text-center my-1">
                {msgTipo === 'sucesso' && <span>Fonte Cadastrado!</span>}
                    
                {msgTipo === 'erro' && <span>Não foi possivel!</span>}
            </div>

        </div>
        </>
    )
}

export default CadastroFonte;