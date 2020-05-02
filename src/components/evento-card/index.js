import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function EventoCard(){
    return(
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/50" className="card-img-top img-cartao" alt="imagem do evento"/>

            <div className="card-body">
                <h5>Titulo do Evento</h5>
                <p className="card-text test-justify">Detalhes do Evento</p>

                <div className="row rodape-card d-flex align0items-center">
                    <div className="col-6">    
                        <Link to="/" className="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i><span> 2019</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventoCard;