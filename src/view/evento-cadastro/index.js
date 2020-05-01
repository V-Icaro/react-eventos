import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';

import firebase from '../../config/firebase';
import 'firebase/auth';

function EventoCadastro(){

    const [msgTipo, setMsgTipo] = useState('');

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
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Tipo do Evento</label>
                    <select className="form-control">
                        <option disabled selected value>--Selecione um tipo --</option>
                        <option value="">Festa</option>
                        <option value="">Teatro</option>
                        <option value="">Show</option>
                        <option value="">Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea className="form-control" rows="3"/>
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <label>Data:</label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label>Hora:</label>
                        <input type="time" className="form-control"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Inserir Imagem:</label>
                    <input type="file" className="form-control"/>
                </div>

                <button type="button" className="btn btn-lg btn-block btn-enviar">Publicar Evento</button>
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