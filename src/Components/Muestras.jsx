import React, { useEffect, useState } from 'react'
import { getAllProductos } from '../Services/productosService'
import Producto from './Muestra'

function Productos(){

    const [productos, setProductos] = useState([])

    useEffect(
        () => {
            const resultado = async() =>{
                try{
                    const responseData = await getAllProductos()
                    console.log(responseData)
                    setProductos(responseData)
                }catch(e){
                    console.log(e)
                }
            }
            resultado()
        },[]
        
    )

    return(
        <>
            <h1>The Covid Tracking Project API</h1>
            {productos.map(producto => <Producto date={producto.date} positive={producto.positive} negative={producto.negative}/>)}
        </>
    )

}

export default Productos