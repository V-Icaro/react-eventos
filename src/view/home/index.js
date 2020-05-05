import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';
import EventoCard from '../../components/evento-card';

import firebase from '../../config/firebase';

function Home(){

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaeventos = [];

    useEffect(() => {
        firebase.firestore().collection('eventos').get()
            .then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0)
                    {
                        listaeventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                });

                setEventos(listaeventos);
            });
    }, [eventos]);

    return (
        <>
        <Navbar /> 
        <div className="row p-5">
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar eventos"/>
        </div>
        
        <div className="row p-3">
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes}/>)}
            
        </div>

        </>
    )
}

export default Home;