function Card() {
  return (
    <>
      <div className="container">
        <img src="spinaci.jpg" alt="" />
        <h2>Pedro Muttenda</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nam
          sunt quos minus ea. Beatae magnam architecto amet cumque ad, rerum
          recusandae esse accusamus repellendus quae deserunt, et, libero quis.
        </p>
        <div className="language">
            <p className="blue">HTML + CSS</p>
            <p className="yellow">JavaScript</p>
            <p className="green">Web Design</p>
            <p className="redi">Git and Github</p>
            <p className="lightblue">React</p>
            <p className="red">Svelte</p>
        </div>
      </div>
    </>
  );
}
export default Card;
