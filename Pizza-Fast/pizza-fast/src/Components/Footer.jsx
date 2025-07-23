const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9
    const closedHour = 18
    // if (hour >= openHour && hour <= closedHour){
    //     alert("We are open")
    // }
    // else{
    //     alert("We are closed")
    // }
  
    return(
        <>
        <footer className="footer">
            {new Date().toLocaleDateString()}" We're currently open!"
        </footer>
        </>
    )
}
export default Footer