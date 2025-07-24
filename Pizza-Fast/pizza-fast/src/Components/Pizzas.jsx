import pizzaData from '../data'
function Pizza(){
    return(
        <>
    {pizzaData.map((pizza, key) => (
            <div className='pizza'>
            <img src={pizza.photoName} alt={pizza.photoName} />
            <h2>{pizza.name}</h2>
            <span>R{pizza.price}</span>
            <p>{pizza.ingredients}</p>
            </div>
            ))}
        
        </>
    )
}
export default Pizza