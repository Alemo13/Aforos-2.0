import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className='navbar-brand' to="/">
                    <img src="http://drive.google.com/uc?export=view&id=10S_5VMpHDlxx_0f-3rVYxyg1u3AF4id0" className="img-fluid" />
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
