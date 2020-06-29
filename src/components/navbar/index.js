import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import img from '../../assets/logo2.jpg';

function Navbar(){

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg justify-content-between">
            <img className="logo" src={img} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars font-white"></i>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {
                                useSelector(state => state.usuarioLogado) > 0 ? 

                            <>
                                <li className="nav-item ml-3"><Link className="nav-link" to="/cagece">Cagece</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/tic">Tic</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/tfl">TFL</Link></li>
                                {/*<li className="nav-item"><Link className="nav-link" to="/cadastro">Entrada</Link></li>*/}

                                
                                {/*REMOVER POR ENQUANTO - LISTA ENTRADA POR USUARIO LOGADO
                                <li className="nav-item"><Link className="nav-link" to="/home/meus">Minhas Entradas</Link></li>
                                */}

                                
                                 
                                

                                <li className="nav-item"><Link to="#" className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})} >Sair</Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                            </>

                            }

                        </ul>
                        
            
                    </div>      
        </nav>
    )
}

export default Navbar;