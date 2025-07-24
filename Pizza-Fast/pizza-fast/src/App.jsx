import './index.css'
import Pizza from './Components/Pizzas'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App(){
    return(
        <>
         <div className='container'>
        <Header/>
        <Pizza/>
        <Footer/>
        </div>  
        </>
    )
}
export default App