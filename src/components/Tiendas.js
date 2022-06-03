import React, { Component } from "react";
import {TIENDAS} from '../shared/detalle_tiendas';
import '../css/prueba.css';

class Tiendas extends Component{

    constructor(props) {
        super(props);

        this.state = {tiendas: TIENDAS};
    }

    render(){
        const tiendas = this.state.tiendas.map((tienda) =>{
            return(
            <div key={tienda.id} className="tienda p1">
                
            <div className="tienda-bg">
                    <div className="panel">
                        <p className="panel-text" >Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sollicitudin consectetur pellentesque risus tellus aliquet. </p>
                    </div>
                    <div className="bg-attr">
                        {tienda.tags.map( function tags(tags) {
                            if (tags.popular) {
                                return(
                                <ul key={tags.id} className="popular"><img className="popular-star" src="assets/images/star.svg" />{tags.nombre}</ul>
                                );
                            } else {
                                return(
                                    <ul key={tags.id} >{tags.nombre}</ul>
                                );
                            } 
                        })}
                    </div>
                <div className="bg-img">
                    <img src={tienda.imagen} alt="Imagen de tienda"/>
                </div>
            </div>
            <div className="tienda-info">
                <h2 className="info-titulo">{tienda.nombre}</h2>
                <p className="info-url">{tienda.url}</p>
                <div className="info-links oferta">
                    <p className="link-info">Ver info <img src="assets/images/arrow.svg"/></p>
                    <p className="link-oferta">Ver ofetas <img src="assets/images/arrow.svg"/></p>
                </div>
            </div>
        </div>);
        });
        return(
            <div className="tiendas">
                {tiendas}
            </div>
        );
    }
}

export default Tiendas;