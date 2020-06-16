import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function EventoCard({id, patrimonio, tipo, usuario, criacao, descricao, modelo}){
    
    const data = new Date(criacao.seconds*1000).toLocaleString()

    return(
        <>
        <div className="col-md-3 col-sm-12 mb-2">

            <div className="card-body">
                <div className="w-80 d-inline-block">
                    <h5>Patrimônio : {patrimonio}</h5>
                    <h6>Descrição: {descricao}</h6>
                    <h6>Modelo: {modelo}</h6>
                    <h6>Equipamento: {tipo}</h6>
                    <h6>Responsavél: {usuario}</h6>
                    <h6>Recebido em: {data}</h6>
                    

                    <div className="row rodape-card d-flex align-items-center">
                        <div className="col-8 ml-auto mt-3">    
                            <Link to={"/detalhes/" + id +"/"+ criacao.seconds} className="btn btn-sm btn-detalhes text-weight-600">DETALHES</Link>
                        </div>
                    </div>
                </div>  
                <div className="w-20 d-inline-block">
                    {tipo === "MONITOR" && <i className="fas fa-desktop"></i>}
                    {tipo === "COMPUTADOR" && <i className="fas fa-hdd"></i>}
                    {tipo === "NOTEBOOK" && <i className="fas fa-laptop"></i>}
                    {tipo === "ESTABILIZADOR" && <i className="fas fa-charging-station"></i>}
                    {tipo === "FONTE" && <i className="fas fa-car-battery"></i>}
                </div>  
            </div>
        </div>
        
        
        </>
    )
}

export default EventoCard;