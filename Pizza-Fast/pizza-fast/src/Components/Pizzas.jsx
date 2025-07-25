import pizzaData from '../data'
function Pizza(){
    return (
      <>
        {pizzaData.map((pizza) => (
          <li className="pizza" key={pizza.name}>
            <div className='pizza'>
              {pizza.soldOut ? (
                <div className="sold-out">
                  <img src={pizza.photoName} alt={pizza.photoName} />
                </div>
              ) : (
                <img src={pizza.photoName} alt={pizza.photoName} />
              )}
            </div>
            <div>
              <h2>{pizza.name}</h2>
              <p>{pizza.ingredients}</p>
              <span>{pizza.soldOut ? "Sold Out" : `R ${pizza.price}`}</span>
            </div>
          </li>
        ))}
      </>
    );
}
export default Pizza