import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

function eventoDetalhes(){
    return(
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row">
                <img src="https://via.placeholder.com/150" className="img-banner"/>
            </div>

            <div className="row mt-5 d-flex justify-content-around">
                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-ticket-alt fa-2x"></i>
                    <h5><strong>Tipo</strong></h5>
                    <span className="mt-3">Festa</span>
                </div>

                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-calendar-alt fa-2x"></i>
                    <h5><strong>Data</strong></h5>
                    <span className="mt-3">10/11/2019</span>
                </div>

                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                    <i className="fas fa-clock fa-2x"></i>
                    <h5><strong>Hora</strong></h5>
                    <span className="mt-3">19:00</span>
                </div>
            </div>

            <div className="row box-detalhes mt-5">
                <h5 className="mx-auto"><strong>Detalhes do Evento</strong></h5>
                <p className="text-justify p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

            <Link to="#" className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
        </div>
        </>
    )
}

export default eventoDetalhes;