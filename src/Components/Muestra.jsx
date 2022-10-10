function Producto( {date, positive, negative} ){
    return(
        <div>
            <br />
            <h2>Fecha (AAAMMDD): {date}</h2>
            <h2>Casos Positivos: {positive}</h2>
            <h2>Casos Negativos: {negative}</h2>
            <br />
        </div>
    )
}

export default Producto