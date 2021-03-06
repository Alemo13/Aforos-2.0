import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className='navbar-brand' to="/">
                    <h4>Aforos</h4>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className='nav-link' to="/restaurantes" >
                                Restaurantes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/parqueaderos" >
                                Parqueaderos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/Bares" >
                                Bares
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
