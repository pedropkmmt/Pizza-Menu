import './index.css'
import Pizza from './Components/Pizzas'
import Header from './Components/Header'
function App(){
    return(
        <>
        <div className='container'>
        <Header/>
        <Pizza/>
        </div>
        </>
    )
}
export default App