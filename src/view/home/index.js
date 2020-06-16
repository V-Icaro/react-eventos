import React, { useState, useEffect } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';
import EventoCard from '../../components/evento-card';

import firebase from '../../config/firebase';
import 'firebase/storage';
import jsPDF from 'jspdf';

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
            doc.text(element.patrimonio,7,c)
            doc.text(element.descricao,57,c)
            doc.text(element.serial,157,c)
            
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
        
        
        <div className="row p-5 home">
            <h3 className="mx-auto p-5">EQUIPAMENTOS</h3>
            <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar Equipamento"/>
        </div>
        <div className="row">
            <button onClick={relatorio} className="mx-auto btn-detalhes">Gerar Relatório</button>
            
        </div>
        
        <div className="row p-3 mb-2">
        
        

        { 
            
            eventos.map(item => <EventoCard key={item.id} id={item.id} patrimonio={item.patrimonio} detalhes={item.detalhes} tipo={item.tipo} usuario={item.usuario} criacao={item.criacao} descricao={item.descricao} modelo={item.modelo} />)    
        }
        </div>

        </>
    )
}

export default Home;