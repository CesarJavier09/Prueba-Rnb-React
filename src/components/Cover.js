import React from 'react';
import '../css/prueba.css';

function Cover() {

    return(
        <div className="cover"> 
            <div className="cover-text">
                <img className="mb-cover-img" src="assets/images/movil-logos.svg"/>
                <h1>Tiendas con las que trabajamos </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sollicitudin consectetur pellentesque risus tellus aliquet. Ut risus volutpat enim sapien ac. Lacus in volutpat maecenas commodo ac mi.</p>
                <div className="cover-search">
                    <img id= "search-icon" src="assets/images/search.svg" />
                    <form className="search-bar">
                        <input type="text" placeholder="Amazon"/>
                    </form>
                    <img id= "close-icon" src="assets/images/close_search.svg"/>
                </div>
            </div>
        </div>
    )
}

export default Cover;