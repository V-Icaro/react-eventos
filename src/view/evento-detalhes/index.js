import React, { useState, useEffect } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

function EventoDetalhes(props){

    const [evento, setEvento] = useState({});
    const [liberar, setLiberar] = useState(0);
    const usuario = useSelector(state => state.usuarioEmail);

    function remover() {
        firebase.firestore().collection('Equipamentos').doc(props.match.params.id).delete()
            .then(() => {
                setLiberar(1)
            })
    }

    useEffect(() => {
        firebase.firestore().collection('Equipamentos').doc(props.match.params.id).get()
            .then(resultado => {
                setEvento(resultado.data())
            })
    },[props.match.params.id])

    const data = new Date(props.match.params.data*1000).toLocaleString()

    return(
        <>
        <Navbar />

        {
            useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null
        }

        {
            liberar === 1 && <Redirect to="/home" /> 
        }

        <div className="container-fluid aling-items-center">
            
            <div className="row mt-5 d-flex justify-content-around mx-5">
                <div className="col-md-3 col-sm-12 box-info p-3">
                    <i className="fas fa-ticket-alt fa-2x"></i>
                    <h5><strong>Patrimônio</strong></h5>
                    <span className="mt-3">{evento.patrimonio}</span>
                </div>
            
                <div className="col-md-3 col-sm-12 box-info p-3">
                    <i className="fas fa-ticket-alt fa-2x"></i>
                    <h5><strong>Tipo</strong></h5>
                    <span className="mt-3">{evento.tipo}</span>
                </div>
            

            
                <div className="col-md-3 col-sm-12 box-info p-3">
                    <i className="fas fa-calendar-alt fa-2x"></i>
                    <h5><strong>Criação</strong></h5>
                    <span className="mt-3">{data}</span>
                </div>
            </div>

            <h5 className="text-center mt-2"><strong>Detalhes do Evento</strong></h5>
            <div className="col-3 text-center box-detalhes my-3 mx-auto">
                    <p>{evento.detalhes}</p>
            </div>
                
            

            {
                usuario === evento.usuario &&
                <Link to={`/editar/${props.match.params.id}`} className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
            }

            
                <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto mt-20">Liberar</button>
            
        </div>
        </>
    )
}

export default EventoDetalhes;