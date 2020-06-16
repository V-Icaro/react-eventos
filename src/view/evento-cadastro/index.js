import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function EventoCadastro(props){

    const [msgTipo, setMsgTipo] = useState('');
    const [patrimonio, setPatrimonio] = useState('');
    const [descricao, setDescricao] = useState('');
    const [modelo, setModelo] = useState('');
    const [serial, setSerial] = useState('');
    const [tipo, setTipo] = useState('');
    const [detalhes, setDetalhes] = useState('');
    const [status, setStatus] = useState('');
    const [setor, setSetor] = useState('');
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
                setDescricao(resultado.data().descricao)
                setModelo(resultado.data().modelo)
                setSerial(resultado.data().serial)
                setStatus(resultado.data().status)
                setSetor(resultado.data().setor)
            })}
    },[props.match.params.id])

    function atualizar() {
        setLoad(1);
        setMsgTipo(null);

                db.collection('Equipamentos').doc(props.match.params.id).update({
                    patrimonio: patrimonio.toUpperCase(),
                    descricao: descricao.toUpperCase(),
                    modelo: modelo.toUpperCase(),
                    serial: serial.toUpperCase(),
                    tipo: tipo.toUpperCase(),
                    detalhes: detalhes.toUpperCase(),
                    status: status.toUpperCase(),
                    setor: setor.toUpperCase()
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
                    patrimonio: patrimonio.toUpperCase(),
                    descricao: descricao.toUpperCase(),
                    modelo: modelo.toUpperCase(),
                    serial: serial.toUpperCase(),
                    tipo: tipo.toUpperCase(),
                    detalhes: detalhes.toUpperCase(),
                    usuario: usuarioEmail,
                    status: status.toUpperCase(),
                    setor: setor.toUpperCase(),
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

            
        <h3 className="text-center font-weight-bold my-2">{props.match.params.id ? 'Atualizar Entrada' : 'Cadastrar Equipamento'}</h3>
            

        <div className="col-12 d-flex align-items-center cadastro">
            
            <form className="form-input mx-auto" /*onSubmit={cadastrar}*/>
                <div className="form-group">
                    <label>Patrimonio</label>
                    <input onChange={(e) => setPatrimonio(e.target.value)} type="text" className="form-control" value={patrimonio && patrimonio} required/>
                </div>

                <div className="form-group">
                    <label>Descrição</label>
                    <input onChange={(e) => setDescricao(e.target.value)} type="text" className="form-control" value={descricao && descricao} required/>
                </div>

                <div className="form-group">
                    <label>Modelo</label>
                    <input onChange={(e) => setModelo(e.target.value)} type="text" className="form-control" value={modelo && modelo} required/>
                </div>

                <div className="form-group">
                    <label>Número de Série</label>
                    <input onChange={(e) => setSerial(e.target.value)} type="text" className="form-control" value={serial && serial} required/>
                </div>

                <div className="form-group">
                    <label>Setor</label>
                    <input onChange={(e) => setSetor(e.target.value)} type="text" className="form-control" value={setor && setor} required/>
                </div>

                <div className="form-group">
                    <label>Tipo de Equipamento</label>
                    <select onChange={(e) => setTipo(e.target.value)} className="form-control" value={tipo && tipo} required>
                        <option value="DEFAULT" disabled>--Selecione um tipo --</option>
                        <option value="Computador" >Computador</option>
                        <option value="Monitor" >Monitor</option>
                        <option value="Estabilizador" >Estabilizador</option>
                        <option value="Notebook" >Notebook</option>
                        <option value="Fonte" >Fonte</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select onChange={(e) => setStatus(e.target.value)} className="form-control" value={status && status} required>
                        <option value="DEFAULT" disabled>--Selecione um status --</option>
                        <option value="Manutenção" >Manutenção</option>
                        <option value="Aguardando Peça" >Aguardando Peça</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Detalhes</label>
                    <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control" rows="3" value={detalhes && detalhes} required/>
                </div>

                {
                    load ? <div className="spinner-border text-danger" role="status"><span className="sr-only">Loading...</span></div>    
                    : <button onClick={props.match.params.id ? atualizar : cadastrar} type="button" className="btn btn-lg btn-block btn-enviar">
                        {props.match.params.id ? 'Editar' : 'Cadastrar Equipamento'}
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