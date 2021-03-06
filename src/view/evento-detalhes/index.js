import React, { useState, useEffect } from 'react';
import './detalhes.css';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


/* --COMPONENTS-- */ 
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import jsPDF from 'jspdf';

function EventoDetalhes(props){

    const [evento, setEvento] = useState({});
    const [liberar, setLiberar] = useState(0);
    //const usuario = useSelector(state => state.usuarioEmail);

    function remover() {
        let doc = new jsPDF();

        //inputs
        doc.setFontSize(14);
        doc.text(evento.descricao,44,77)
        doc.text(evento.patrimonio,166,77)
        doc.text(evento.descricao,44,219)
        doc.text(evento.patrimonio,166,219)

        doc.setFontSize(17);
        doc.text('NOTA DE TRÂNSITO DE BENS MATERIAIS',50,13)
        doc.text('NOTA DE TRÂNSITO DE BENS MATERIAIS',50,159) //P2
        doc.setFontSize(12);
        doc.text('UNIDADE EMITENTE',10,23)
        doc.text('UNIDADE EMITENTE',10,167)//P2
        doc.text('SIGLA',182,23)
        doc.text('SIGLA',182,167)
        doc.setLineWidth(0.5)
        doc.line(4, 18, 206, 18) // horizontal line
        doc.line(4, 162, 206, 162)//P2
        doc.setLineWidth(1)
        doc.line(4, 3, 206, 3)//P2
        
        doc.setLineWidth(0.5)
        doc.line(4, 25, 206, 25)
        doc.line(4, 169, 206, 169)//P2
        
        doc.setFontSize(12);
        doc.text('GERENCIA DA TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO',10, 35)
        doc.text('GERENCIA DA TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO',10, 177)//P2
        doc.text('GETIC',182,35)
        doc.text('GETIC',182,177)//P2
        doc.text('QUANTIDADE',6,67)
        doc.text('QUANTIDADE',6,209)//P2
        doc.text('DESCRIÇÃO DO BEM',75,67)
        doc.text('DESCRIÇÃO DO BEM',75,209)//P2
        doc.text('Nº TOMBAMENTO',164,67)
        doc.text('Nº TOMBAMENTO',164,209)//P2
        doc.setLineWidth(0.5)
        doc.line(4, 40, 206, 40)
        doc.line(4, 182, 206, 182)//P2
        
        doc.setLineWidth(1)
        doc.line(4, 60, 206, 60)
        doc.line(4, 202, 206, 202)//P2
        
        doc.setLineWidth(1)
        doc.line(4, 90, 206, 90)
        doc.line(4, 232, 206, 232)//P2
        
        doc.setFontSize(12);
        doc.text('DESTINATÁRIO',10, 45)
        doc.text('DESTINATÁRIO',10, 187)//P2
        doc.setLineWidth(0.5)
        doc.line(4, 47, 206, 47) //horizontal line
        doc.line(4, 189, 206, 189)//P2
        
        doc.setLineWidth(0.5)
        doc.line(4, 70, 206, 70)
        doc.line(4, 212, 206, 212)//P2
        
        doc.setLineWidth(0.5)
        doc.line(4, 80, 206, 80)
        doc.line(4, 222, 206, 222)//P2
        
        doc.setFontSize(12);
        doc.text('MOTIVO DO TRÂNSITO',10,96)
        doc.text('MOTIVO DO TRÂNSITO',10,238)//P2
        doc.setLineWidth(0.5)
        doc.line(4, 98, 206, 98)
        doc.line(4, 240, 206, 240)//P2
        
        doc.setFontSize(12);
        doc.text('(  ) Necessidade do Setor',10,104)
        doc.text('(  ) Necessidade do Setor',10,246)//P2
        doc.text('(  ) Manutenção',82,104)
        doc.text('(  ) Manutenção',82,246)//P2
        doc.text('(  ) Outros-DEVOLUÇÃO',140,104)
        doc.text('(  ) Outros-DEVOLUÇÃO',140,246)//P2
        doc.setLineWidth(1)
        doc.line(4, 108, 206, 108)
        doc.line(4, 250, 206, 250)//P2
        
        doc.setFontSize(12);
        doc.text('DATA',5,115)
        doc.text('DATA',5,257)//P2
        doc.text('MATRICULA',52,115)
        doc.text('MATRICULA',52,257)//P2
        doc.text('EMITENTE',118,115)
        doc.text('EMITENTE',118,257)//P2
        doc.text('DATA',5,137)
        doc.text('DATA',5,279)//P2
        doc.text('MATRICULA',52,137)
        doc.text('MATRICULA',52,279)//P2
        doc.text('DESTINATÁRIO',118,137)
        doc.text('DESTINATÁRIO',118,279)//P2
        doc.setLineWidth(0.5)
        doc.line(4, 120, 206, 120)
        doc.line(4, 262, 206, 262)//p2
        doc.setLineWidth(0.5)
        doc.line(4, 130, 206, 130)
        doc.line(4, 272, 206, 272)//p2
        doc.setLineWidth(1)
        doc.line(4, 142, 206, 142)
        doc.line(4, 284, 206, 284)//p2
        
        doc.setDrawColor(0, 0, 0) // draw red lines
        
        //primeira linha vertical
        doc.setLineWidth(1)
        doc.line(180, 3, 180, 60)
        doc.line(180, 142, 180, 202)//p2
        
        //segunda linha vertical
        doc.setLineWidth(1)
        doc.line(160, 60, 160, 90)
        doc.line(160, 202, 160, 232)//p2
        
        //terceira linha vertical
        doc.setLineWidth(1)
        doc.line(40, 60, 40, 90)
        doc.line(40, 202, 40, 232)//p2
        
        doc.setLineWidth(1)
        doc.line(50, 120, 50, 108)
        doc.line(50, 262, 50, 250)//p2
        
        doc.setLineWidth(1)
        doc.line(116, 120, 116, 108)
        doc.line(116, 262, 116, 250)//p2
        
        doc.setLineWidth(1)
        doc.line(50, 142, 50, 130)
        doc.line(50, 284, 50, 272)//p2
        
        doc.setLineWidth(1)
        doc.line(116, 130, 116, 142)
        doc.line(116, 272, 116, 284)//p2
        
        doc.line(4, 3, 4, 284)//p2
        doc.line(206, 3, 206, 284)//p2


        doc.save('genereted.pdf');

        firebase.firestore().collection(props.match.params.tipo).doc(props.match.params.id).delete()
            .then(() => {
                setLiberar(1)
            })
    }

    useEffect(() => {
        firebase.firestore().collection(props.match.params.tipo).doc(props.match.params.id).get()
            .then(resultado => {
                setEvento(resultado.data())
            })
    },[props.match.params.id])

    const data = new Date(props.match.params.data*1000).toLocaleString()
    //console.log('detalhes')
    return(
        <>
        <Navbar />

        {
            useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null
        }

        {
            liberar === 1 && <Redirect to="/home" /> 
        }

        {props.match.params.tipo === "computadores" &&
        <>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Patrimônio</th>
                        <td>{evento.patrimonio}</td>
                    </tr>
                    <tr>
                        <th scope="row">Descrição</th>
                        <td>{evento.descricao}</td>
                    </tr>
                    <tr>
                        <th scope="row">Modelo</th>
                        <td>{evento.modelo}</td>
                    </tr>
                    <tr>
                        <th scope="row">Setor</th>
                        <td>{evento.setor}</td>
                    </tr>
                    <tr>
                        <th scope="row">Serial</th>
                        <td>{evento.serial}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{evento.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Responsavél</th>
                        <td>{evento.usuario}</td>
                    </tr>
                    <tr>
                        <th scope="row">Criação</th>
                        <td>{data}</td>
                    </tr>
                    <tr>
                        <th scope="row">Detalhes</th>
                        <td>{evento.detalhes}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row icones">
            <Link to={`/editar-computador/${props.match.params.id}`} className="btn btn-ls btn-block btn-edicao mx-auto"><i className="fas fa-pen-square fa-3x"></i></Link>
            <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto">Liberar</button>
            </div>
            </>
            }

        {props.match.params.tipo === "estabilizadores" &&
        <>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Patrimônio</th>
                        <td>{evento.patrimonio}</td>
                    </tr>
                    <tr>
                        <th scope="row">Descrição</th>
                        <td>{evento.descricao}</td>
                    </tr>
                    <tr>
                        <th scope="row">Modelo</th>
                        <td>{evento.modelo}</td>
                    </tr>
                    <tr>
                        <th scope="row">Setor</th>
                        <td>{evento.setor}</td>
                    </tr>
                    <tr>
                        <th scope="row">Potência</th>
                        <td>{evento.potencia}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{evento.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Responsavél</th>
                        <td>{evento.usuario}</td>
                    </tr>
                    <tr>
                        <th scope="row">Criação</th>
                        <td>{data}</td>
                    </tr>
                    <tr>
                        <th scope="row">Detalhes</th>
                        <td>{evento.detalhes}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row icones">
            <Link to={`/editar-estabilizador/${props.match.params.id}`} className="btn btn-ls btn-block btn-edicao mx-auto"><i className="fas fa-pen-square fa-3x"></i></Link>
            <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto">Liberar</button>
            </div>
            </>
            }

        {props.match.params.tipo === "fontes" &&
        <>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Descrição</th>
                        <td>{evento.descricao}</td>
                    </tr>
                    <tr>
                        <th scope="row">Flu</th>
                        <td>{evento.flu}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{evento.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Criação</th>
                        <td>{data}</td>
                    </tr>
                    <tr>
                        <th scope="row">Responsavél</th>
                        <td>{evento.usuario}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row icones">
            <Link to={`/editar-fonte/${props.match.params.id}`} className="btn btn-ls btn-block btn-edicao mx-auto"><i className="fas fa-pen-square fa-3x"></i></Link>
            <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto">Liberar</button>
            </div>
            </>
            }

        {props.match.params.tipo === "monitores" &&
        <>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Patrimônio</th>
                        <td>{evento.patrimonio}</td>
                    </tr>
                    <tr>
                        <th scope="row">Descrição</th>
                        <td>{evento.descricao}</td>
                    </tr>
                    <tr>
                        <th scope="row">Modelo</th>
                        <td>{evento.modelo}</td>
                    </tr>
                    <tr>
                        <th scope="row">Serial</th>
                        <td>{evento.serial}</td>
                    </tr>
                    <tr>
                        <th scope="row">Setor</th>
                        <td>{evento.setor}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{evento.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Responsavél</th>
                        <td>{evento.usuario}</td>
                    </tr>
                    <tr>
                        <th scope="row">Criação</th>
                        <td>{data}</td>
                    </tr>
                    <tr>
                        <th scope="row">Detalhes</th>
                        <td>{evento.detalhes}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row icones">
            <Link to={`/editar-monitor/${props.match.params.id}`} className="btn btn-ls btn-block btn-edicao mx-auto"><i className="fas fa-pen-square fa-3x"></i></Link>
            <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto">Liberar</button>
            </div>
            </>
            }
            
            {props.match.params.tipo === "notebooks" &&
        <>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Patrimônio</th>
                        <td>{evento.patrimonio}</td>
                    </tr>
                    <tr>
                        <th scope="row">Descrição</th>
                        <td>{evento.descricao}</td>
                    </tr>
                    <tr>
                        <th scope="row">Modelo</th>
                        <td>{evento.modelo}</td>
                    </tr>
                    <tr>
                        <th scope="row">Setor</th>
                        <td>{evento.setor}</td>
                    </tr>
                    <tr>
                        <th scope="row">Serial</th>
                        <td>{evento.serial}</td>
                    </tr>
                    <tr>
                        <th scope="row">Código do Adaptador</th>
                        <td>{evento.adaptador}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{evento.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Responsavél</th>
                        <td>{evento.usuario}</td>
                    </tr>
                    <tr>
                        <th scope="row">Criação</th>
                        <td>{data}</td>
                    </tr>
                    <tr>
                        <th scope="row">Detalhes</th>
                        <td>{evento.detalhes}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row icones">
            <Link to={`/editar-notebook/${props.match.params.id}`} className="btn btn-ls btn-block btn-edicao mx-auto"><i className="fas fa-pen-square fa-3x"></i></Link>
            <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto">Liberar</button>
            </div>
            </>
            }
            
            {props.match.params.tipo === "pinpad" &&
        <>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Descrição</th>
                        <td>{evento.descricao}</td>
                    </tr>
                    <tr>
                        <th scope="row">Modelo</th>
                        <td>{evento.modelo}</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{evento.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Responsavél</th>
                        <td>{evento.usuario}</td>
                    </tr>
                    <tr>
                        <th scope="row">Criação</th>
                        <td>{data}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row icones">
            <Link to={`/editar-pinpad/${props.match.params.id}`} className="btn btn-ls btn-block btn-edicao mx-auto"><i className="fas fa-pen-square fa-3x"></i></Link>
            <button onClick={remover} type="button" className="btn btn-ls btn-block btn-liberar mx-auto">Liberar</button>
            </div>
            </>
            }
                
            
        
        
        </>
    )
}

export default EventoDetalhes;