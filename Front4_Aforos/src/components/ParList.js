import React, { Component } from 'react'
import axios from 'axios'

export default class ParList extends Component {
    state = {
        places: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/places')
        this.setState({ places: res.data });
        console.log(this.state.places)
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h5>Establecimientos</h5>
                    <br />
                    <br />
                    <ul className="list-group">
                        {
                            this.state.places.filter(place => place.tipo == ('Parqueadero')).map(place => (
                                (<li className='list-group-item list-group-item-action' key={place._id}>
                                    {place.nombre}
                                </li>))
                            )
                        }
                    </ul>
                </div>
                <div className="col-md-8">
                    <h5>Capacidad</h5>
                    <br />
                    <br />
                    <ul className="list-group">
                        {
                            this.state.places.filter(place => place.tipo == ('Parqueadero')).map(place => (
                                (<li className='list-group-item list-group-item-action' key={place._id}>
                                    {place.capacidad}
                                </li>))
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
