import React, { useState, useEffect } from 'react';
import './home-tfl.css';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';
import EventoCard from '../../components/evento-card';

import firebase from '../../config/firebase';
import 'firebase/storage';
import jsPDF from 'jspdf';

function HomeTfl({match}){

    
    const [tipo, setTipo] = useState('pinpad');
    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [status, setStatus] = useState('DISPONIVEL');
    let listaeventos = [];
    const usuario = useSelector(state => state.usuarioEmail);
    const contrato = 'tfl'

    useEffect(() => {
        
        firebase.firestore().collection(tipo).where('contrato', '==', contrato).where('status', '==', status).get()
            .then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                        if(doc.data().descricao.indexOf(pesquisa) >= 0)
                            {
                                listaeventos.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }else if(doc.data().modelo.indexOf(pesquisa) >= 0)
                            {
                                listaeventos.push({
                                    id: doc.id,
                                    ...doc.data()
                                });
                            }
                })
                setEventos(listaeventos);
            })

    },[tipo, pesquisa, status]);

    
    

    function relatorio(){

        const doc = new jsPDF()
        let a = 20;
        let b = 30;
        let c = 27;
        doc.setLineWidth(0.5)
        doc.line(4, 20, 206, 20) // horizontal line
        doc.setFontSize(20)
        doc.text('RELATÓRIO DE EQUIPAMENTOS',45,15)
        doc.setFontSize(15)
        doc.text('Patrimônio',7,27)
        doc.text('Descrição',57,27)
        doc.text('Número de Série',157,27)
        for (let index = 0; index < eventos.length; index++) {
            const element = eventos[index];
            console.log(element)
            a+=10;
            b+=10;
            c+=10;
            doc.setLineWidth(0.5)
            doc.line(4, a, 206, a) // horizontal line
            doc.line(4, 20, 4, b) // vertical line
            doc.line(206, 20, 206, b) // vertical line
            doc.line(50, 20, 50, b) // vertical line
            doc.line(150, 20, 150, b) // vertical line
            doc.setFontSize(15)
            if(element.tipo === 'fonte'){
                doc.text(element.descricao,7,c)
                doc.text(element.flu,57,c)
                doc.text(element.status,157,c)
            }else if(element.tipo === 'estabilizador'){
                doc.text(element.patrimonio,7,c)
                doc.text(element.descricao,57,c)
                doc.text(element.potencia,157,c)
            }else{
            doc.text(element.patrimonio,7,c)
            doc.text(element.descricao,57,c)
            doc.text(element.serial,157,c)
            }
        }
        a += 10;
        doc.line(4, a, 206, a) // horizontal line
        doc.save('genereted.pdf');
    }


    //console.log('home')
    return (
        <>
        <Navbar /> 

        {
            useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null
        }
        <div className="d-flex">
            <div className="row mx-auto mt-2 opcoes-bloco">
                <button onClick={() => {setTipo('pinpad')}} type="button" className="btn-detalhes btn-dark my-5 mx-5">PinPad</button>
            </div> 
        </div>
        <hr></hr>
        <div className="row p-2">
            <h3 className="mx-auto p-2">{tipo}</h3>
        </div>
        <div className="row p-2">
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center pesquisar mx-auto mb-2" placeholder="Pesquisar Equipamento"/>
        </div>
        <hr></hr>
        <div className="row my-2">
        <div className="mx-auto dropdown mx-2">
                <button className="btn btn-light dropdown-toggle btn-sm text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Cadastrar
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item"  to="/cadastro-pinpad">PinPad</Link>
                </div>
            </div>
            <button onClick={relatorio} className="mx-auto btn-detalhes">Gerar Relatório</button>
            <button onClick={() => setStatus('DISPONIVEL')} className="mx-auto btn-on">Disponiveis</button>
            <button onClick={() => setStatus('MANUTENCAO')} className="mx-auto btn-off">Indiponiveis</button>
            
        </div>
        <hr></hr>
        <div className="row p-3 mb-2">
        
        

        { 
            tipo === 'pinpad' && eventos.map(item => <EventoCard key={item.id} id={item.id} tipo={tipo} usuario={item.usuario} criacao={item.criacao} descricao={item.descricao} modelo={item.modelo} status={item.status} quantidade={item.quantidade}/>)    
        }

        
        </div>

        </>
    )
}

export default HomeTfl;