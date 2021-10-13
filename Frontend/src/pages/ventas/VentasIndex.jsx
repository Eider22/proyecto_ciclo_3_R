import React from 'react'
import Tabla from 'components/ventas/Tabla'
// import stylesVentasIndex from 'styles/pages/ventas/ventasIndex.css'
import BarraBusqueda from 'components/ventas/BarraBusqueda';
import Formulario from 'components/ventas/Formulario';
import {Link} from "react-router-dom";


const datosSimulados = [
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    },
    {
        "id": "01",
        "fecha": '01/02/2021',
        "documentoCliente": '10025232654',
        "nombreCliente": 'Eduardo Rincon',
        "vendedor": "02",
        "valorTotal": "150550"
    }

];

const VentasIndex = () => {
    return (
        <div>
            <div className='contenedor-padre'>
                {/* <section className='contenedor-tabla'>
                    <div className='search search-sticky'>                    
                        <BarraBusqueda/>
                        </div>
                        <Tabla datos={datosSimulados}></Tabla>
                    </section> */}
                <section className='contenedor-formulario'>
                    <Formulario />
                </section>
                <div >
                    <Link to='/ventas/listaVentas'>
                    <button type="button" class="btn btn-primary link-ventas">VENTAS</button>
                    </Link>
                </div>
                {/* <section className=''>
                    <button>
                        <h2>Ver las ventas</h2>
                    </button>
                </section> */}
            </div>
        </div>
    )
}

export default VentasIndex
