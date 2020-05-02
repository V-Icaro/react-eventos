import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';

import firebase from '../../config/firebase';
import 'firebase/auth';

function EventoCadastro(){

    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    const [load, setLoad] = useState();

    function cadastrar() {
        setLoad(1);

        setMsgTipo(null);

        storage.ref(`imagens/${foto.name}`).put(foto)
            .then(() => {
                db.collection('eventos').add({
                    titulo: titulo,
                    tipo: tipo,
                    detalhes: detalhes,
                    data: data,
                    hora: hora,
                    usuario: usuarioEmail,
                    visualizacoes: 0,
                    foto: foto.name,
                    publico: 1,
                    criacao: new Date(),
                }).then(() => {
                    setLoad(0);
                    setMsgTipo('sucesso');
                }).catch(erro => {
                    setLoad(0);
                    setMsgTipo('erro');
                });
            });
            
    }

    return(
        <>
        <Navbar />
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
            </div>
            <form>
                <div className="form-group">
                    <label>Titulo:</label>
                    <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Tipo do Evento</label>
                    <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                        <option disabled selected value>--Selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control" rows="3"/>
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <label>Data:</label>
                        <input onChange={(e) => setData(e.target.value)} type="date" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label>Hora:</label>
                        <input onChange={(e) => setHora(e.target.value)} type="time" className="form-control"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Inserir Imagem:</label>
                    <input onChange={(e) => setFoto(e.target.files[0])} type="file" className="form-control"/>
                </div>

                {
                    load ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>    
                    : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block btn-enviar">Publicar Evento</button>
                }

            </form>

            <div className="msg-login text-center my-1">
                {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Evento publicado! &#128526;</span>}
                    
                {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possivel! &#128546;</span>}
            </div>

        </div>
        </>
    )
}

export default EventoCadastro;