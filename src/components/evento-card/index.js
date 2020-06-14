import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function EventoCard({id, patrimonio, detalhes, tipo, usuario, criacao}){
    
    const data = new Date(criacao.seconds*1000).toLocaleString()

    return(
        <div className="col-md-3 col-sm-12 mb-2">

            <div className="card-body">
                <h5>Patrimônio : {patrimonio}</h5>
                <h6>Detalhes</h6>
                <p className="card-text test-justify">{detalhes}</p>

                <h6>EQUIPAMENTO: {tipo}</h6>
                <h6>RESPONSAVEL: {usuario}</h6>
                <h6>RECEBIDO: {data}</h6>
                

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">    
                        <Link to={"/detalhes/" + id +"/"+ criacao.seconds} className="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>

                    

                    
                    
                </div>
            </div>
        </div>
    )
}

export default EventoCard;