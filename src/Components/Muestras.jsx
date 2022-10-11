import React, { useEffect, useState } from 'react'
import { getAllMuestras } from '../Services/muestrasService'
import Muestra from './Muestra'

function Muestras(){

    const [muestras, setMuestras] = useState([])

    useEffect(
        () => {
            const resultado = async() =>{
                try{
                    const responseData = await getAllMuestras()
                    console.log(responseData)
                    setMuestras(responseData)
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
            {muestras.map(muestra => <Muestra date={muestra.date} positive={muestra.positive} negative={muestra.negative}/>)}
        </>
    )

}

export default Muestras