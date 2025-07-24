import './index.css'
import Pizza from './Components/Pizzas'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App(){
    return(
        <>
         <div className='container'>
        <Header/>
        <Pizza name="Pizza Spinaci" ingredients ="Tomato, mozarella, spinach, and ricotta cheese" price={120}  photoName="spinaci.jpg" soldOut={false}/>
        <Footer/>
        </div>  
        </>
    )
}
export default App