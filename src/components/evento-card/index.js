import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function EventoCard(props){
    console.log(props.tipo)
    const data = new Date(props.criacao.seconds*1000).toLocaleString()

    return(
        <>
        <div className="col-lg-3 col-sm-12 col-md-6 mb-2">

             {props.tipo === 'monitores' &&   
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Patrimônio: {props.patrimonio}</h5>
                    <p className="card-text">Marca: {props.descricao}</p>
                    <p className="card-text">Setor: {props.setor}</p>
                    <p className="card-text">Responsavél: {props.usuario}</p>
                    <p className="card-text">Criação: {data}</p>
                    <Link to={"/detalhes/" + props.id +"/"+ props.criacao.seconds +"/"+props.tipo} className="btn btn-sm btn-detalhes text-weight-600">DETALHES</Link>
                </div>
            </div>
            }

            {props.tipo === 'computadores' &&   
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Patrimônio: {props.patrimonio}</h5>
                    <p className="card-text">Marca: {props.descricao}</p>
                    <p className="card-text">Setor: {props.setor}</p>
                    <p className="card-text">Responsavél: {props.usuario}</p>
                    <p className="card-text">Criação: {data}</p>
                    <Link to={"/detalhes/" + props.id +"/"+ props.criacao.seconds +"/"+props.tipo} className="btn btn-sm btn-detalhes text-weight-600">DETALHES</Link>
                </div>
            </div>
            }

            {props.tipo === 'fontes' &&   
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Descrição: {props.descricao}</h5>
                    <p className="card-text">FLU: {props.flu}</p>
                    <p className="card-text">Responsavél: {props.usuario}</p>
                    <p className="card-text">Criação: {data}</p>
                    <Link to={"/detalhes/" + props.id +"/"+ props.criacao.seconds +"/"+ props.tipo} className="btn btn-sm btn-detalhes text-weight-600">DETALHES</Link>
                </div>
            </div>
            }

            {props.tipo === 'estabilizadores' &&   
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Patrimônio: {props.patrimonio}</h5>
                    <p className="card-text">Marca: {props.descricao}</p>
                    <p className="card-text">Potência: {props.potencia}</p>
                    <p className="card-text">Setor: {props.setor}</p>
                    <p className="card-text">Responsavél: {props.usuario}</p>
                    <p className="card-text">Criação: {data}</p>
                    <Link to={"/detalhes/" + props.id +"/"+ props.criacao.seconds +"/"+props.tipo} className="btn btn-sm btn-detalhes text-weight-600">DETALHES</Link>
                </div>
            </div>
            }

            {props.tipo === 'notebooks' &&   
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Patrimônio: {props.patrimonio}</h5>
                    <p className="card-text">Marca: {props.descricao}</p>
                    <p className="card-text">Setor: {props.setor}</p>
                    <p className="card-text">Responsavél: {props.usuario}</p>
                    <p className="card-text">Criação: {data}</p>
                    <Link to={"/detalhes/" + props.id +"/"+ props.criacao.seconds +"/"+props.tipo} className="btn btn-sm btn-detalhes text-weight-600">DETALHES</Link>
                </div>
            </div>
            }
        </div>
        
        
        </>
    )
}

export default EventoCard;