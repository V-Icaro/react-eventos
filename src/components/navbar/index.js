import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function Navbar(){

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <i className="fas fa-laptop text-white fa-2x mr-2"></i>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars font-white"></i>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {
                                useSelector(state => state.usuarioLogado) > 0 ? 

                            <>
                                <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/cadastro">Entrada</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/home/meus">Minhas Entradas</Link></li>
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