import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function EventoCadastro(props){

    const [msgTipo, setMsgTipo] = useState();
    const [patrimonio, setPatrimonio] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const db = firebase.firestore();

    const [load, setLoad] = useState();

    useEffect(() => {
        if(props.match.params.id){
        firebase.firestore().collection('Equipamentos').doc(props.match.params.id).get()
            .then(resultado => {
                setPatrimonio(resultado.data().patrimonio)
                setTipo(resultado.data().tipo)
                setDetalhes(resultado.data().detalhes)
            })}
    },[props.match.params.id])

    function atualizar() {
        setLoad(1);
        setMsgTipo(null);

                db.collection('Equipamentos').doc(props.match.params.id).update({
                    patrimonio: patrimonio,
                    tipo: tipo,
                    detalhes: detalhes,
                    usuario: usuarioEmail,
                    criacao: new Date().toLocaleDateString()
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

                db.collection('Equipamentos').add({
                    patrimonio: patrimonio,
                    tipo: tipo,
                    detalhes: detalhes,
                    usuario: usuarioEmail,
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

        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">{props.match.params.id ? 'Atualizar Entrada' : 'Cadastrar Equipamento'}</h3>
            </div>
            <form>
                <div className="form-group">
                    <label>Patrimonio:</label>
                    <input onChange={(e) => setPatrimonio(e.target.value)} type="text" className="form-control" value={patrimonio && patrimonio} required/>
                </div>

                <div className="form-group">
                    <label>Tipo de Equipamento</label>
                    <select defaultValue={'DEFAULT'} onChange={(e) => setTipo(e.target.value)} className="form-control" value={tipo && tipo}  required>
                        <option value="DEFAULT" disabled>--Selecione um tipo --</option>
                        <option value="Computador" >Computador</option>
                        <option value="Monitor" >Monitor</option>
                        <option value="Estabilizador" >Estabilizador</option>
                        <option value="Notebook" >Notebook</option>
                        <option value="Fonte" >Fonte</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control" rows="3" value={detalhes && detalhes} required/>
                </div>

                {
                    load ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div>    
                    : <button onClick={props.match.params.id ? atualizar : cadastrar} type="button" className="btn btn-lg btn-block btn-enviar">
                        {props.match.params.id ? 'Atualizar' : 'Cadastrar Equipamento'}
                    </button>
                }

            </form>

            <div className="msg-login text-center my-1">
                {msgTipo === 'sucesso' && <span>Equipamento Cadastrado!</span>}
                    
                {msgTipo === 'erro' && <span>Não foi possivel!</span>}
            </div>

        </div>
        </>
    )
}

export default EventoCadastro;