import '../data'
function Pizza(props){
    return(
        <>
        <div className ="pizza">
        <img src={props.photoName} alt="spinaci pizza" />
        <h2>{props.name}</h2>
        <h2>R{props.price}</h2>
        <p>{props.ingredients}</p>
         </div>
        </>
    )
}
export default Pizza