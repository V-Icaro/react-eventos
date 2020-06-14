import React, { useState, useEffect } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';
import EventoCard from '../../components/evento-card';

import firebase from '../../config/firebase';
import 'firebase/storage';

function Home({match}){

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaeventos = [];
    const usuario = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        if(match.params.parametro){
            firebase.firestore().collection('Equipamentos').where('usuario', '==', usuario).get()
            .then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if(doc.data().patrimonio.indexOf(pesquisa) >= 0)
                    {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                });

                setEventos(listaeventos);
            });
        }else{
            firebase.firestore().collection('Equipamentos').get()
            .then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                        if(doc.data().patrimonio.indexOf(pesquisa) >= 0)
                            {
                                listaeventos.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }else if(doc.data().usuario.indexOf(pesquisa) >= 0)
                            {
                                listaeventos.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                })
                setEventos(listaeventos);
            });
        }

        
    },[pesquisa]);

    return (
        <>
        <Navbar /> 

        {
            useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null
        }

        <div className="row p-5 home">
            <h3 className="mx-auto p-5">EQUIPAMENTOS</h3>
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar Equipamento"/>
        </div>
        
        <div className="row p-3 mb-2">
        
        

        { 
            
            eventos.map(item => <EventoCard key={item.id} id={item.id} patrimonio={item.patrimonio} detalhes={item.detalhes} tipo={item.tipo} usuario={item.usuario} criacao={item.criacao} />)    
        }
        </div>

        </>
    )
}

export default Home;