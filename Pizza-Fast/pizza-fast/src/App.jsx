import './index.css'
import Pizza from './Components/Pizzas'
import Header from './Components/Header'
import Footer from './Components/Footer'
import pizzaData from './data'
function App(){
    return(
        <>
         <div className='container'>
        <Header/>
        <ul className='pizzas'>
            <Pizza/>
       </ul>
        <Footer/>
        </div>  
        </>
    )
}
export default App