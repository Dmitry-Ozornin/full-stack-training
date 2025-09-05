function Product({id,name,description,price,availability}) {


    return ( 
        <li key={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p> {availability === true ? "Доступен" : "Недоступен"}</p>

        </li>
     );
}

export default Product;