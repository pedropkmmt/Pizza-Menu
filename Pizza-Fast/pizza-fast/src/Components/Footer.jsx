const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9
    const closedHour = 18
    const isOpen = hour >= openHour && hour <= closedHour;
    /* if (hour >= openHour && hour <= closedHour){
        alert("We are open")
     }
     else{
        alert("We are closed")
     }
        */
       if (!isOpen){
        return(
            <>
            <footer className="footer">
                <div className="order">
                    <p>Closed Opens At {openHour}:00am</p>
                    <button className="btnclosed">Order</button>
                </div>
              </footer>
            </>
          
        )
       }else{
  
    return(
        <>
        <footer className="footer">
            <div className="order">
            {isOpen == true ? <p>We're Currently open until {closedHour}:00pm</p> : <p>Closed Opens At {openHour}:00am</p>}
            <button className="btn">Order</button>
            </div>
        </footer>
        </>
    )
}
}
export default Footer