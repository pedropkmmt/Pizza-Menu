import pizzaData from '../data'
function Pizza(){
    return(
        <>
       
            {pizzaData.map((pizza, key) => (
            <div className ="pizzas">
                <div className="pizza">
                <img src={pizza.photoName} alt={pizza.name} />
                <h2 >{pizza.name}</h2>
                <h2>R{pizza.price}</h2>
                <p>{pizza.ingredients}</p>
                </div>
            </div>
            ))}
        
        </>
    )
}
export default Pizza