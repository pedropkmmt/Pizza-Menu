function Pizza(props){
    return(
        <>
            <div className='pizza'>
            <img src={props.pizzaObji.photoName} alt={props.pizzaObji.photoName} />
            <h2>{props.pizzaObji.name}</h2>
            <span>R{props.pizzaObji.price}</span>
            <p>{props.pizzaObji.ingredients}</p>
            </div>
        </>
    )
}
export default Pizza