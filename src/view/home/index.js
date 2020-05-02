import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/';
import EventoCard from '../../components/evento-card';

function Home(){
    return (
        <>
        <Navbar />
        <h1>{useSelector(state => state.usuarioEmail)}</h1>
        <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>

        <div className="row">
            <EventoCard />
            <EventoCard />
            <EventoCard />
            <EventoCard />
            <EventoCard />
        </div>

        </>
    )
}

export default Home;